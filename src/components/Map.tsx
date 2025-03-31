
import React, { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run this code on the client-side
    if (typeof window !== 'undefined' && mapRef.current) {
      // Initialize Google Maps embed
      const iframe = document.createElement('iframe');
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = '0';
      iframe.style.borderRadius = '8px';
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('loading', 'lazy');
      iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
      
      // Set the Google Maps embed URL with the exact coordinates from the user's link
      iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.3275!2d-50.0479722!3d-7.3093056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTgnMzMuNSJTIDUwwrAwMic1Mi43Ilc!5e0!3m2!1spt-BR!2sbr!4v1715799000000!5m2!1spt-BR!2sbr";
      
      // Append to the map container
      if (mapRef.current.childElementCount === 0) {
        mapRef.current.appendChild(iframe);
      }
    }
  }, []);

  return <div ref={mapRef} className="h-full w-full"></div>;
};

export default Map;
