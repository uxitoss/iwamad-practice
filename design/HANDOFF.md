# Week 5 — Handoff notes (SIS 2 starter design)
Routes (from the prototype):  /posts (list of posts), /posts/:id (single post), * (404 page, "Back to all posts" link)
Components → React files:     PostCard → src/components/ui/Card.tsx   Button → src/components/ui/Button.tsx   Tag → src/components/ui/Tag.tsx
Button variants → prop:       variant = primary | secondary
PostCard layout:              direction column  gap 12px  padding 16px  radius 8px
Breakpoint change:            phone 1 column(s), desktop 3 columns; header stacked on phone, one row on desktop
Tokens (all ten):             color/primary = #1D4ED8  color/on-primary = #FFFFFF  color/text = #1F2937  color/text-muted = #9CA3AF  color/surface = #FFFFFF  color/border = #D1D5DB  space/2 = 8px  space/4 = 16px  space/6 = 24px  radius/md = 8px