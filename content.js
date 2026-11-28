/* =====================================================================
   EDIT YOUR PORTFOLIO HERE  (open this file in any text editor)
   ---------------------------------------------------------------------
   ADD A VIDEO:
   1. Copy the ID from the YouTube link.
        youtu.be/MmaI9rps3w0            -> ID is MmaI9rps3w0
        youtube.com/shorts/_oRFoOu9eNk  -> ID is _oRFoOu9eNk
        youtube.com/watch?v=Jqk7eirTyvE -> ID is Jqk7eirTyvE
   2. Add one line in "short" or "long" like this (keep the comma):
        {id:"PASTE_ID", title:"Your video title"},
   3. Save the file and refresh the page. That's it.
   ===================================================================== */

const CONFIG = {
  email: "prabhatjain200228@gmail.com",          // e.g. "you@gmail.com"  (empty = button hidden)
  instagram: "",      // e.g. "https://instagram.com/yourhandle"  (empty = button hidden)
  channel: "https://www.youtube.com/@bhatzaynshort",

  // SHORT FORM (vertical). First 3 show in the fanned cards, the rest show below.
  short: [
    {id:"7JLihK78BBc", title:"Yoga bar"},
    {id:"h50a4QUPdyk", title:"Rameshwaram"},
  ],

  // LONG FORM (horizontal)
  long: [
    {id:"MmaI9rps3w0", title:"Documentary style"},
    {id:"Jqk7eirTyvE", title:"Metro Media style"},
    {id:"QXMtWT4yKIY", title:"Podcast"},
    {id:"Ur1921ZbdpE", title:"IKEA"},
    {id:"sel30CBW_nk", title:"lemmino style"},
  ],

  // Shown as "In production" rows under long form. Delete lines when not needed.
  longComing: [],

  // MOTION: your own clips in assets/motion/ (a .jpg with the same name is used as the cover)
  motion: ["portfolio/Prabhat%20Jain-Video%20Editor/assets/motion/motion-04.mp4", "portfolio/Prabhat%20Jain-Video%20Editor/assets/motion/motion-05.mp4", "portfolio/Prabhat%20Jain-Video%20Editor/assets/motion/motion-06.mp4", "portfolio/Prabhat%20Jain-Video%20Editor/assets/motion/motion-03.mp4"],

  // TOOLS: logo files live in assets/tools/ (file name without .png)
  tools: [
    {name:"DaVinci Resolve",     short:"Dr", file:"davinci-resolve"},
    {name:"Adobe Premiere Pro",  short:"Pr", file:"premiere-pro"},
    {name:"Adobe After Effects", short:"Ae", file:"after-effects"},
    {name:"Adobe Photoshop",     short:"Ps", file:"photoshop"},
    {name:"Gemini",              short:"Ge", file:"gemini"},
    {name:"ChatGPT",             short:"Gp", file:"chatgpt"},
    {name:"Codex",               short:"Cx", file:"chatgpt"},
    {name:"Claude",              short:"Cl", file:"claude"},
    {name:"Magnific (Freepik)",  short:"Mg", file:"magnific"},
    {name:"Higgsfield AI",       short:"Hf", file:"higgsfield"},
    {name:"Kling AI",            short:"Kl", file:"kling"},
    {name:"Epidemic Sound",      short:"Es", file:"epidemic-sound"},
  ]
};
