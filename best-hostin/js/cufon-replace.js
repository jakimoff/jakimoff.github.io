Cufon.replace('.text', { fontFamily: 'Didact Gothic', hover:true });
Cufon.replace('h2, h3', { fontFamily: 'Shanti', hover:true });

   $(document).ready(function() {
      $('#myRoundabout').roundabout({
          shape: 'square',
          minScale: 0.89, // tiny!
          maxScale: 1, // tiny!
          easing:'easeOutExpo',
          clickToFocus:'true',
          focusBearing:'0',
          duration:800,
          reflect:true
      });
   });