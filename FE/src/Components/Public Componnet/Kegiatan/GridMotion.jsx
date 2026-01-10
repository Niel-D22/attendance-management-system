import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const GridMotion = ({ items = [], gradientColor = "black" }) => {
  const gridRef = useRef(null);
  const rowRefs = useRef([]);
  const mouseXRef = useRef(window.innerWidth / 2);

  // 1. Tambah total item agar grid penuh (4 baris x 10 kolom = 40)
  const totalItems = 40; 
  const defaultItems = Array.from(
    { length: totalItems },
    (_, index) => `Item ${index + 1}`
  );
  const combinedItems =
    items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e) => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = () => {
      const maxMoveAmount = 300;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount =
            ((mouseXRef.current / window.innerWidth) * maxMoveAmount -
              maxMoveAmount / 2) *
            direction;

          gsap.to(row, {
            x: moveAmount,
            duration:
              baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      removeAnimationLoop();
    };
  }, []);

  return (
    <div ref={gridRef} className="h-full w-full overflow-hidden bg-black">
      <section
        className="w-full h-screen overflow-hidden relative flex items-center justify-center"
        style={{
          background:
            "radial-gradient(circle at center, #1000 0%, #000 100%, transparent 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none z-[4] bg-[length:250px]"></div>
        
        {/* 2. ZOOM OUT: Tambah scale-[0.8] dan perlebar w-[180vw] agar mencakup layar saat diputar */}
        <div className="gap-4 flex-none relative w-[180vw] h-[150vh] grid grid-rows-4 grid-cols-1 rotate-[-15deg] origin-center z-[2] scale-[0.8]">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              // 3. FIX GEPENG: grid-cols harus sama dengan jumlah Array di bawahnya (10)
              className="grid gap-10 grid-cols-10" 
              style={{ willChange: "transform, filter" }}
              ref={(el) => (rowRefs.current[rowIndex] = el)}
            >
              {[...Array(10)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 10 + itemIndex];
                return (
                  // 4. FIX ASPEK RASIO: Tambah aspect-square agar kotak tetap presisi
                  <div key={itemIndex} className="relative cursor-pointer aspect-square">
                    <div className="relative w-full h-full overflow-hidden rounded-[10px] bg-[#111] flex items-center justify-center text-white text-[1rem] transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-3 hover:z-30 hover:shadow-2xl border border-white/5">
                      {typeof content === "string" &&
                      content.startsWith("http") ? (
                        <div
                          className="w-full h-full bg-cover bg-center absolute top-0 left-0"
                          style={{ backgroundImage: `url(${content})` }}
                        ></div>
                      ) : (
                        <div className="p-4 text-center z-[1]">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="relative w-full h-full top-0 left-0 pointer-events-none"></div>
      </section>
    </div>
  );
};

export default GridMotion;