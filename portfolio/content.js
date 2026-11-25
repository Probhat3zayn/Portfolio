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
  email: "",          // e.g. "you@gmail.com"  (empty = button hidden)
  instagram: "",      // e.g. "https://instagram.com/yourhandle"  (empty = button hidden)
  channel: "https://www.youtube.com/@bhatzaynshort",

  // SHORT FORM (vertical). First 3 show in the fanned cards, the rest show below.
  short: [
    {id:"_oRFoOu9eNk", title:"Yoga bar"},
    {id:"QUAAXRarj3U", title:"Yoga bar assignment 19, correction"},
  ],

  // LONG FORM (horizontal)
  long: [
    {id:"MmaI9rps3w0", title:"Assignment 21"},
    {id:"Jqk7eirTyvE", title:"Metro Media trail video 2"},
    {id:"QXMtWT4yKIY", title:"Podcast"},
    {id:"Ur1921ZbdpE", title:"IKEA"},
    {id:"sel30CBW_nk", title:"lemmino style"},
  ],

  // Shown as "In production" rows under long form. Delete lines when not needed.
  longComing: [],

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
