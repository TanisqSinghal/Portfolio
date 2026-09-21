import React, { useRef } from 'react'

const GlowCard = ({ card, children, index }) => {

    const cardRefs = useRef([]);

    const handleMouseMove = (index) => (e) => {
        const card = cardRefs.current[index];
        if(!card) return;

        //Get the mouse position relative to the card
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        //calc the angle from the center of the card
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI); // Convert to degrees
        
        angle = (angle + 360) % 360; // Normalize to [0, 360)

        card.style.setProperty('--start', angle + 60);

    }

  return (
    <div ref={(el) => (cardRefs.current[index] = el)} onMouseMove={handleMouseMove(index)} className='card card-border timeline-card rounded-xl md:p-10 p-5'>
      <div className='glow'/>
      <div className='flex items-center gap-1 md:mb-5 mb-3'>
        {Array.from({length: 5}, (_, i) => (
            <img src="/images/star.png" key={i} alt="star" className='md:size-5 size-4'/>
        ))}
      </div>

      <div className='md:mb-5 mb-3'>
        <p className='text-white-50 md:text-lg text-base'>{card.review}</p>
      </div>
      {children}
    </div>
  )
}

export default GlowCard