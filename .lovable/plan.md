# Inspirations page — Room Composer & 3D Model Request

## 1. Remove three materials

In `src/data/materials.ts`:
- Remove `pietra-iseo` (Pietra d'Iseo Grey)
- Remove `luxor-gold` (Luxor Gold)
- Remove `vendome-vagues` (Vendome Calacatta Vagues)

Also clean up their image imports + `images` map entries. Update `detectStyle()` in `InspirationsPage.tsx` so its `gold`/`marble` arrays no longer reference removed IDs.

The image asset files stay on disk (harmless).

## 2. New "Room Composer" program

A new section appears below the existing Moodboard, on the same `/inspirations` page (single page, no extra route).

### Rooms (trilingual labels)
Tabs/cards for: **Bathroom · Kitchen · Living room · Balcony · Terrace · Garden · Lighting**.

### Slot model (phase 1 — slots first, per your choice)
Each room exposes a fixed set of "surfaces" the client assigns a material to. Surfaces are filtered to relevant material categories:

| Room | Slots |
|---|---|
| Bathroom | Floor, Wall, Shower, Vanity top |
| Kitchen | Floor, Wall / splashback, Countertop |
| Living room | Floor, Feature wall, Accent |
| Balcony | Floor, Wall |
| Terrace | Floor, Cladding |
| Garden | Pathway, Pool deck, Border |
| Lighting | Ambience (warm / neutral / cool), Intensity (soft / medium / statement) |

The Lighting "room" uses a small radio picker, not material slots — it sets a mood that is sent in the request.

### Interaction
- Click a slot → opens a panel listing the materials (filtered by category appropriate for that slot, e.g. wood not allowed for shower walls).
- Selected material thumbnail fills the slot card.
- "Clear slot" button per slot, "Reset room" button per room.
- Selections persist in `localStorage` so the client can switch rooms without losing work.

### Visual preview (phase 2 — noted, not built now)
Per your "slots first, visual next" choice, a stylised SVG room illustration with tinted/textured zones can be added in a follow-up. Plan stops at slot UI for this iteration.

## 3. CTAs — Save & Send

Two buttons appear in a sticky footer bar on the Composer:

### A. "Demander mon modèle 3D personnalisé" → WhatsApp
Opens `wa.me/4915568580042` with a pre-filled trilingual message:

```
Bonjour Mane Josselin, je souhaite un modèle 3D personnalisé.

— Salle de bain —
• Sol : Calacatta Gold (Céramique)
• Mur : Harbour White (SPC)
…

— Cuisine —
…

Ambiance lumineuse : chaude / douce
```

Only rooms with at least one selection are included. Reuses the existing `PHONE` constant and language pattern from the current moodboard CTA.

### B. "Télécharger ma sélection (PDF)"
Generates a branded one-page PDF client-side using `jspdf` with:
- MAISON DE DESIGN header (logo text, gold accent line)
- One section per room with selected materials (name, category, format) and small swatch image
- Lighting summary
- Footer with WhatsApp number + website
- Saves as `maison-de-design-moodboard.pdf`

`jspdf` will be added via `bun add jspdf`. No backend, fully offline, works on free hosting per the project memory.

## 4. Files

**Edit**
- `src/data/materials.ts` — remove 3 materials + their imports/map entries
- `src/pages/InspirationsPage.tsx` — fix `detectStyle` references; mount the new Composer below existing Moodboard

**Create**
- `src/data/rooms.ts` — room + slot definitions with allowed material categories and trilingual labels
- `src/components/RoomComposer.tsx` — tabs, slot grid, material picker dialog, sticky CTA bar
- `src/lib/moodboardPdf.ts` — `generateMoodboardPdf(state, lang)` using jspdf

**Dependency**
- Add `jspdf`

## 5. Out of scope (kept simple)
- No login / cloud save (per "Download as PDF" choice)
- No email sending (per WhatsApp choice)
- No visual room canvas yet (phase 2 follow-up)
- No new route — Composer lives on `/inspirations` under the existing Moodboard
