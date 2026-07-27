# Portfolio starter

A single-page developer portfolio — plain HTML/CSS/JS, no build step, no dependencies.
Deploys for free in under 5 minutes.

## 1. Preview it locally

Just double-click `index.html`, or for a proper local server:

```bash
# Python (already on most machines)
python3 -m http.server 8000
# then open http://localhost:8000
```

## 2. Replace the placeholder content

Everything you need to change is wrapped in `[brackets]` inside `index.html`. Work top to bottom:

- **Nav brand** — your name/handle
- **Hero** — name, role, one-line pitch, location
- **About** — 2 short paragraphs + the fact list (base, focus, stack, current role)
- **Skills** — your real languages/frameworks/infra/practices
- **Projects** — 3 strong projects. For each: what it does, the specific technical
  decision or problem you solved, a measurable outcome if you have one, and links to
  code/live demo. Three projects you can talk about for 2 minutes in an interview beat
  six thin ones.
- **Experience** — reverse-chronological log of roles (or role + education)
- **Contact** — email, LinkedIn, GitHub

Add your resume PDF at `assets/resume.pdf` (the nav button links there already).

Colors and fonts live at the top of `styles.css` under `:root` if you want to adjust
the palette — everything references those variables.

## 3. Put it online for free

**Easiest: Vercel (recommended)**
1. Push this folder to a new GitHub repo (public or private, doesn't matter).
2. Go to vercel.com → sign in with GitHub → "Add New Project" → import the repo.
3. Framework preset: "Other" (it's static, no build command needed). Deploy.
4. You'll get a live URL like `your-name.vercel.app` — that's the link for your CV/LinkedIn.

**Alternative: GitHub Pages**
1. Push the folder to a GitHub repo.
2. Repo → Settings → Pages → Source: deploy from branch `main`, folder `/root`.
3. Live at `your-username.github.io/repo-name` in a minute or two.

**Alternative: Netlify**
1. Go to app.netlify.com → drag and drop this folder directly onto the dashboard. Done —
   no GitHub required, though connecting a repo gets you auto-redeploys on push.

## 4. Optional: a real custom domain

The free subdomains above (`.vercel.app`, `.github.io`, `.netlify.app`) look perfectly
professional on a CV. If you want `yourname.com` instead, buy the domain from Namecheap
or Cloudflare (~$8–12/year) and point it at whichever host you used — each has a
one-page "add custom domain" guide once your site is live.

## 5. Before you share the link

- [ ] Every `[bracket]` placeholder replaced
- [ ] All project/GitHub/LinkedIn links actually work (open each one)
- [ ] Resume PDF uploaded and the nav link opens it
- [ ] Checked on your phone — the mobile nav toggle works
- [ ] Ran it through a spell-checker once, top to bottom
