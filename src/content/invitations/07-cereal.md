---
title: "Cereal Box"
style: "Cereal Box Ingredient List"
date: 2026-04-16
type: html
fonts: []
accentColor: "#0033aa"
teaser: "Now fortified with fellowship. Serving size: one backyard barbecue."
thumbnail: "/thumbnails/07-cereal.png"
---

<style>
  .cereal-wrap {
    background: #ffe100;
    max-width: 480px;
    margin: 0 auto;
    font-family: 'Arial Narrow', 'Arial', sans-serif;
    color: #1a1a1a;
    border: 1px solid #ccc;
  }
  .cereal-title-bar {
    background: #0033aa;
    color: #fff;
    text-align: center;
    padding: 10px 16px 8px;
    font-size: 22px;
    font-weight: 900;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-family: Impact, 'Arial Black', sans-serif;
    border-bottom: 4px solid #001a66;
  }
  .cereal-title-bar span { display: block; font-size: 11px; font-weight: normal; font-family: Arial, sans-serif; letter-spacing: 0.15em; color: #aaccff; margin-top: 2px; }
  .cereal-body { padding: 14px 18px; }
  .cereal-nutrition { border: 2px solid #1a1a1a; margin-bottom: 14px; }
  .cereal-nutrition-title { background: #1a1a1a; color: #ffe100; font-size: 20px; font-weight: 900; padding: 4px 10px; font-family: Impact, 'Arial Black', sans-serif; letter-spacing: 0.02em; }
  .cereal-serving { padding: 4px 10px; font-size: 11px; border-bottom: 8px solid #1a1a1a; line-height: 1.6; }
  .cereal-calories-row { display: flex; align-items: baseline; justify-content: space-between; padding: 2px 10px; border-bottom: 4px solid #1a1a1a; }
  .cereal-calories-label { font-size: 13px; font-weight: bold; }
  .cereal-calories-val { font-size: 36px; font-weight: 900; font-family: Impact, 'Arial Black', sans-serif; }
  .cereal-dv-header { font-size: 9px; text-align: right; padding: 2px 10px; border-bottom: 1px solid #1a1a1a; color: #444; }
  .cereal-nutrient { display: flex; justify-content: space-between; padding: 2px 10px; font-size: 12px; border-bottom: 0.5px solid #aaa; }
  .cereal-nutrient.thick { border-bottom: 4px solid #1a1a1a; }
  .cereal-nutrient.indent { padding-left: 22px; font-size: 11px; color: #333; }
  .cereal-nutrient-name { font-weight: bold; }
  .cereal-nutrient-name.light { font-weight: normal; }
  .cereal-nutrient-dv { color: #333; }
  .cereal-footnote { font-size: 9px; padding: 4px 10px 6px; color: #444; line-height: 1.5; border-top: 0.5px solid #aaa; }
  .cereal-ingredients { font-size: 11px; line-height: 1.8; margin-bottom: 12px; color: #1a1a1a; }
  .cereal-ingredients strong { font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; }
  .cereal-allergen { font-size: 10.5px; line-height: 1.7; margin-bottom: 12px; color: #333; }
  .cereal-allergen strong { text-transform: uppercase; }
  .cereal-fortified { background: #fff4b0; border: 1px solid #cc2200; padding: 8px 12px; font-size: 10.5px; color: #444; line-height: 1.7; margin-bottom: 12px; text-align: center; }
  .cereal-fortified strong { color: #1a1a1a; display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 3px; }
  .cereal-upc-row { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 10px; padding-top: 10px; border-top: 1px solid #ccc; }
  .cereal-upc-text { font-size: 9px; color: #666; line-height: 1.6; }
  .cereal-upc-bars { display: flex; gap: 1px; align-items: flex-end; height: 40px; }
  .cereal-bar { background: #1a1a1a; width: 2px; }
</style>

<div class="cereal-wrap">
  <div class="cereal-title-bar">
    Magic Lab BBQ Flakes
    <span>The Official Cereal of the Boston Magic Lab End-of-Season Gathering</span>
  </div>
  <div class="cereal-body">
    <div class="cereal-nutrition">
      <div class="cereal-nutrition-title">Nutrition Facts</div>
      <div class="cereal-serving">
        About 1 serving per container<br>
        <strong>Serving size</strong> &nbsp; 1 Backyard Barbecue (70 Scituate St, Arlington MA)
      </div>
      <div class="cereal-calories-row">
        <div class="cereal-calories-label">Amount per serving<br><span style="font-size:20px;font-weight:900;">Calories</span></div>
        <div class="cereal-calories-val">∞</div>
      </div>
      <div class="cereal-dv-header">% Daily Value*</div>
      <div class="cereal-nutrient thick">
        <span class="cereal-nutrient-name">Fellowship</span>
        <span class="cereal-nutrient-dv">100%</span>
      </div>
      <div class="cereal-nutrient">
        <span class="cereal-nutrient-name">Jeannine (at grill)</span>
        <span class="cereal-nutrient-dv">100%</span>
      </div>
      <div class="cereal-nutrient indent">
        <span class="cereal-nutrient-name light">Smoke (aromatic)</span>
        <span class="cereal-nutrient-dv">abundant</span>
      </div>
      <div class="cereal-nutrient indent">
        <span class="cereal-nutrient-name light">Authority (absolute)</span>
        <span class="cereal-nutrient-dv">100%</span>
      </div>
      <div class="cereal-nutrient">
        <span class="cereal-nutrient-name">Felice (organizational)</span>
        <span class="cereal-nutrient-dv">100%</span>
      </div>
      <div class="cereal-nutrient indent">
        <span class="cereal-nutrient-name light">Coordination (forthcoming)</span>
        <span class="cereal-nutrient-dv">TBA</span>
      </div>
      <div class="cereal-nutrient">
        <span class="cereal-nutrient-name">Manufacturers</span>
        <span class="cereal-nutrient-dv">to taste</span>
      </div>
      <div class="cereal-nutrient">
        <span class="cereal-nutrient-name">Wonder (residual, seasonal)</span>
        <span class="cereal-nutrient-dv">high</span>
      </div>
      <div class="cereal-nutrient">
        <span class="cereal-nutrient-name">May Afternoon (late)</span>
        <span class="cereal-nutrient-dv">1 unit</span>
      </div>
      <div class="cereal-nutrient">
        <span class="cereal-nutrient-name">Sodium (tears, optional)</span>
        <span class="cereal-nutrient-dv">trace</span>
      </div>
      <div class="cereal-nutrient thick">
        <span class="cereal-nutrient-name">Empty Hands</span>
        <span class="cereal-nutrient-dv">0%</span>
      </div>
      <div class="cereal-footnote">
        * Percent Daily Values based on a 2,000 calorie diet and one good season.<br>
        † Coordination of guest provisions forthcoming. Watch this space.
      </div>
    </div>
    <div class="cereal-fortified">
      <strong>Now Fortified With:</strong>
      Gratitude · Good Company · Rear Garden · One Full Season of Magic
    </div>
    <div class="cereal-ingredients">
      <strong>Ingredients:</strong> Magic Lab (whole, assembled over one season), Jeannine (presiding, grill-ready), Felice (executive grade, fully activated), Manufacturers (to taste), Friends (assorted, invited), Rear Garden (70 Scituate Street, Arlington MA), May Afternoon (one, the 17th), Coals (sufficient), Smoke (aromatic), Food (guest-supplied, TBD), Drink (likewise), Fellowship (unbounded), That Particular Light That Comes Into A Garden When Everything Is Finished And Everyone You Want To Be With Is There (1 unit, non-negotiable). <em>Contains: joy. May contain: mild sentimentality near the end of the afternoon.</em>
    </div>
    <div class="cereal-allergen">
      <strong>Allergen info:</strong> Contains <strong>fellowship</strong>. Produced in a facility that also processes <strong>wonder, gratitude,</strong> and <strong>Jeannine's cooking</strong>, which is an allergen only in the sense that once exposed you will find all other barbecues insufficient.
    </div>
    <div class="cereal-upc-row">
      <div class="cereal-upc-text">
        Distributed by the Boston Magic Lab<br>
        Felice & the Manufacturers, proprietors<br>
        Sunday May 17 2026 · 1:00PM<br>
        One serving only. Not sold in stores.
      </div>
      <div class="cereal-upc-bars">
        <div class="cereal-bar" style="height:40px"></div>
        <div class="cereal-bar" style="height:30px"></div>
        <div class="cereal-bar" style="height:40px"></div>
        <div class="cereal-bar" style="height:25px"></div>
        <div class="cereal-bar" style="height:40px"></div>
        <div class="cereal-bar" style="height:35px"></div>
        <div class="cereal-bar" style="height:40px"></div>
        <div class="cereal-bar" style="height:20px"></div>
        <div class="cereal-bar" style="height:40px"></div>
        <div class="cereal-bar" style="height:30px"></div>
        <div class="cereal-bar" style="height:40px"></div>
        <div class="cereal-bar" style="height:38px"></div>
        <div class="cereal-bar" style="height:40px"></div>
        <div class="cereal-bar" style="height:22px"></div>
        <div class="cereal-bar" style="height:40px"></div>
        <div class="cereal-bar" style="height:40px"></div>
        <div class="cereal-bar" style="height:28px"></div>
        <div class="cereal-bar" style="height:40px"></div>
        <div class="cereal-bar" style="height:32px"></div>
        <div class="cereal-bar" style="height:40px"></div>
      </div>
    </div>
  </div>
</div>
