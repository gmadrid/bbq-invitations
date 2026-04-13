---
title: "Elizabethan Court"
style: "Elizabethan Court"
date: 2026-04-11
type: html
fonts: ["IM Fell English:ital@0;1", "IM Fell DW Pica:ital@0;1"]
accentColor: "#1a3a1a"
teaser: "Know ye by these presents..."
thumbnail: "/thumbnails/03-elizabethan.png"
---

<style>
  .eliz-wrap {
    background: #e8f0e4;
    max-width: 600px;
    margin: 0 auto;
    font-family: 'IM Fell English', 'Palatino Linotype', Georgia, serif;
    color: #0a1a0a;
    position: relative;
  }
  .eliz-border {
    border: 3px solid #2a5c2a;
    padding: 44px 52px 40px;
    position: relative;
  }
  .eliz-border::before {
    content: '';
    position: absolute;
    inset: 7px;
    border: 0.5px solid #6a8a40;
    pointer-events: none;
  }
  .eliz-corner { position: absolute; width: 48px; height: 48px; }
  .eliz-corner svg { width: 48px; height: 48px; }
  .ec-tl { top: 3px; left: 3px; }
  .ec-tr { top: 3px; right: 3px; transform: scaleX(-1); }
  .ec-bl { bottom: 3px; left: 3px; transform: scaleY(-1); }
  .ec-br { bottom: 3px; right: 3px; transform: scale(-1,-1); }
  .eliz-royal-arms { text-align: center; margin-bottom: 10px; }
  .eliz-eyebrow { text-align: center; font-size: 10px; letter-spacing: 0.28em; text-transform: uppercase; color: #3a6a2a; margin-bottom: 16px; font-style: italic; }
  .eliz-title { text-align: center; font-size: 13px; letter-spacing: 0.22em; text-transform: uppercase; color: #1a3a1a; margin-bottom: 6px; }
  .eliz-name { text-align: center; font-size: 36px; font-style: italic; color: #0a1a0a; line-height: 1.1; margin-bottom: 4px; }
  .eliz-subtitle { text-align: center; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #3a6a2a; margin-bottom: 20px; }
  .eliz-rule { display: flex; align-items: center; gap: 10px; margin: 16px 0; }
  .eliz-rule hr { flex: 1; border: none; border-top: 0.5px solid #6a8a40; }
  .eliz-rule-g { font-size: 14px; color: #6a8a40; }
  .eliz-body { font-size: 15.5px; line-height: 1.95; color: #0a1a0a; text-align: justify; hyphens: auto; }
  .eliz-body p { margin: 12px 0; }
  .eliz-drop { float: left; font-size: 64px; font-style: italic; line-height: 0.82; margin: 4px 6px 0 0; color: #2a5c2a; }
  .eliz-body em { font-style: italic; }
  .eliz-proc { background: #e8d8a0; border-top: 1px solid #6a8a40; border-bottom: 1px solid #6a8a40; margin: 20px -52px; padding: 14px 52px; text-align: center; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #1a3a1a; line-height: 1.8; }
  .eliz-details { margin: 20px 0 16px; }
  .eliz-detail-row { display: flex; gap: 0; margin: 8px 0; font-size: 15px; line-height: 1.6; align-items: baseline; }
  .eliz-detail-label { font-style: italic; color: #3a6a2a; min-width: 90px; flex-shrink: 0; }
  .eliz-detail-dots { flex: 1; border-bottom: 0.5px dotted #6a8a40; margin: 0 8px 4px; min-width: 20px; }
  .eliz-detail-val { color: #0a1a0a; text-align: right; flex-shrink: 0; max-width: 280px; }
  .eliz-footer { text-align: center; margin-top: 20px; }
  .eliz-seal { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #3a6a2a; margin-bottom: 6px; }
  .eliz-sig { font-size: 22px; font-style: italic; color: #0a1a0a; margin-bottom: 4px; }
  .eliz-fine { font-size: 12px; font-style: italic; color: #3a6a2a; line-height: 1.7; }
  .eliz-latin { font-size: 11px; letter-spacing: 0.12em; color: #2a5c2a; margin-top: 10px; font-style: italic; }
</style>

<div class="eliz-wrap">
  <div class="eliz-border">
    <div class="eliz-corner ec-tl"><svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M4,4 Q4,24 4,44" stroke="#2a5c2a" stroke-width="1" fill="none"/><path d="M4,4 Q24,4 44,4" stroke="#2a5c2a" stroke-width="1" fill="none"/><path d="M4,4 C4,14 14,14 14,24 C14,34 4,34 4,44" stroke="#6a8a40" stroke-width="0.5" fill="none"/><path d="M4,4 C14,4 14,14 24,14 C34,14 34,4 44,4" stroke="#6a8a40" stroke-width="0.5" fill="none"/><circle cx="4" cy="4" r="2.5" fill="#2a5c2a"/><circle cx="14" cy="14" r="1.5" fill="#6a8a40"/><circle cx="24" cy="14" r="1" fill="#6a8a40"/><circle cx="14" cy="24" r="1" fill="#6a8a40"/></svg></div>
    <div class="eliz-corner ec-tr"><svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M4,4 Q4,24 4,44" stroke="#2a5c2a" stroke-width="1" fill="none"/><path d="M4,4 Q24,4 44,4" stroke="#2a5c2a" stroke-width="1" fill="none"/><path d="M4,4 C4,14 14,14 14,24 C14,34 4,34 4,44" stroke="#6a8a40" stroke-width="0.5" fill="none"/><path d="M4,4 C14,4 14,14 24,14 C34,14 34,4 44,4" stroke="#6a8a40" stroke-width="0.5" fill="none"/><circle cx="4" cy="4" r="2.5" fill="#2a5c2a"/><circle cx="14" cy="14" r="1.5" fill="#6a8a40"/><circle cx="24" cy="14" r="1" fill="#6a8a40"/><circle cx="14" cy="24" r="1" fill="#6a8a40"/></svg></div>
    <div class="eliz-corner ec-bl"><svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M4,4 Q4,24 4,44" stroke="#2a5c2a" stroke-width="1" fill="none"/><path d="M4,4 Q24,4 44,4" stroke="#2a5c2a" stroke-width="1" fill="none"/><path d="M4,4 C4,14 14,14 14,24 C14,34 4,34 4,44" stroke="#6a8a40" stroke-width="0.5" fill="none"/><path d="M4,4 C14,4 14,14 24,14 C34,14 34,4 44,4" stroke="#6a8a40" stroke-width="0.5" fill="none"/><circle cx="4" cy="4" r="2.5" fill="#2a5c2a"/><circle cx="14" cy="14" r="1.5" fill="#6a8a40"/><circle cx="24" cy="14" r="1" fill="#6a8a40"/><circle cx="14" cy="24" r="1" fill="#6a8a40"/></svg></div>
    <div class="eliz-corner ec-br"><svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M4,4 Q4,24 4,44" stroke="#2a5c2a" stroke-width="1" fill="none"/><path d="M4,4 Q24,4 44,4" stroke="#2a5c2a" stroke-width="1" fill="none"/><path d="M4,4 C4,14 14,14 14,24 C14,34 4,34 4,44" stroke="#6a8a40" stroke-width="0.5" fill="none"/><path d="M4,4 C14,4 14,14 24,14 C34,14 34,4 44,4" stroke="#6a8a40" stroke-width="0.5" fill="none"/><circle cx="4" cy="4" r="2.5" fill="#2a5c2a"/><circle cx="14" cy="14" r="1.5" fill="#6a8a40"/><circle cx="24" cy="14" r="1" fill="#6a8a40"/><circle cx="14" cy="24" r="1" fill="#6a8a40"/></svg></div>
    <div class="eliz-royal-arms">
      <svg width="60" height="56" viewBox="0 0 60 56" xmlns="http://www.w3.org/2000/svg">
        <polygon points="30,4 36,20 54,20 40,30 46,48 30,38 14,48 20,30 6,20 24,20" fill="none" stroke="#6a8a40" stroke-width="1"/>
        <polygon points="30,10 34,21 46,21 37,28 40,40 30,33 20,40 23,28 14,21 26,21" fill="#8ab060" opacity="0.3"/>
        <circle cx="30" cy="28" r="5" fill="none" stroke="#2a5c2a" stroke-width="0.5"/>
        <path d="M30,23 L30,33 M25,28 L35,28" stroke="#2a5c2a" stroke-width="0.5"/>
      </svg>
    </div>
    <div class="eliz-eyebrow">By Gracious Licence of the Companie</div>
    <div class="eliz-title">The Boston Magic Lab doth proclaim</div>
    <div class="eliz-name">A Feast &amp; Revelling</div>
    <div class="eliz-subtitle">Upon the Occasion of the Season's End · Anno Domini 2026</div>
    <div class="eliz-rule"><hr><span class="eliz-rule-g">❧</span><hr></div>
    <div class="eliz-body">
      <p><span class="eliz-drop">K</span>now ye by these presents, that the Members &amp; Friends of <em>The Boston Magic Lab</em>, being moved by gratitude for a Season most prodigious in Wonders &amp; Delights, do hereby summon all good Fellows to a Feast &amp; Revelling at the Dwelling of the Companie, there to eat, drink, &amp; make merry in the in the Pleasaunce behind the House.</p>
      <p>Let it further be known that the most accomplished <em>Jeannine</em>, whose command of the Culinary Arts hath long been the envy of lesser mortals, shall hold dominion over the Grill &amp; all matters pertaining thereto. Her authority in this regard is absolute &amp; not to be questioned.</p>
      <p>Each Guest is earnestly enjoin'd to bring some Provision — whether Meat, Drink, or Sweetmeats — as their circumstances do permit, that the Board may groan beneath the weight of abundance. Particulars of coordination shall be dispatch'd in due season.</p>
    </div>
    <div class="eliz-proc">
      Attendance is commanded &amp; non-attendance is a matter most grievous to the Companie<br>
      Pray send word of thy coming with all convenient speed
    </div>
    <div class="eliz-details">
      <div class="eliz-detail-row">
        <span class="eliz-detail-label">Upon what Day</span>
        <span class="eliz-detail-dots"></span>
        <span class="eliz-detail-val">Sunday the XVII<sup style="font-size:10px">th</sup> of May, 2026</span>
      </div>
      <div class="eliz-detail-row">
        <span class="eliz-detail-label">At what Hour</span>
        <span class="eliz-detail-dots"></span>
        <span class="eliz-detail-val">One of the Clock in the Afternoon</span>
      </div>
      <div class="eliz-detail-row">
        <span class="eliz-detail-label">At what Place</span>
        <span class="eliz-detail-dots"></span>
        <span class="eliz-detail-val">70 Scituate Street, Arlington<br><span style="font-size:13px;font-style:italic;color:#3a6a2a;">In the Rear Garden thereof</span></span>
      </div>
      <div class="eliz-detail-row">
        <span class="eliz-detail-label">Who is Bidden</span>
        <span class="eliz-detail-dots"></span>
        <span class="eliz-detail-val">The Magic Lab &amp; all their Friends</span>
      </div>
    </div>
    <div class="eliz-rule"><hr><span class="eliz-rule-g">❧</span><hr></div>
    <div class="eliz-footer">
      <div class="eliz-seal">Given under the Hand &amp; Seal of</div>
      <div class="eliz-sig">Felice &amp; the Worshipful Companie of the Magic Lab</div>
      <div class="eliz-fine">Masters &amp; Governors of the Boston Magic Lab</div>
      <div class="eliz-latin">Ars Magica Omnia Vincit</div>
    </div>
  </div>
</div>
