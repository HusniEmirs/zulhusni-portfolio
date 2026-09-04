# AGENTS.md

## Project

This repository contains my personal software developer portfolio.

The goal is to build a professional portfolio that demonstrates real engineering
experience, technical capability, problem solving, and modern development practices.

The portfolio should be suitable for recruiters, hiring managers, and technical interviewers.

## Tech Stack

- React
- TypeScript
- Vite
- ESLint
- CSS
- GitHub

Do not introduce additional frameworks or major dependencies unless they provide
a clear benefit and are approved first.

## Portfolio Direction

The portfolio should feel:

- Professional
- Modern
- Minimal
- Technical
- Clean
- Fast
- Responsive

Avoid generic portfolio-template aesthetics.

Avoid excessive gradients, glowing effects, animations, floating shapes, particle
backgrounds, or visual clutter.

The website should prioritize readability and engineering credibility over visual gimmicks.

## Target Roles

The portfolio primarily targets:

- Software Developer
- Software Engineer
- Full Stack Developer
- Web Developer
- Junior Software Engineer
- AI-assisted / AI-driven software development roles

## Content Principles

Portfolio content must focus on evidence rather than vague claims.

Avoid phrases such as:

- "Passionate developer"
- "Coding enthusiast"
- "I turn coffee into code"
- "Creating innovative solutions"
- Skill percentage bars such as "PHP 90%"

Instead, demonstrate capability through:

- Real projects
- Engineering problems
- Responsibilities
- Technologies used
- Architecture decisions
- Challenges solved
- Development workflow

## Portfolio Structure

Initial sections:

1. Hero
2. About
3. Experience
4. Selected Projects
5. Technical Skills
6. Engineering Highlights
7. Contact

Keep the website primarily single-page unless additional routes become genuinely useful.

## Selected Project Direction

The portfolio should eventually showcase approximately three strong projects rather than
many weak projects.

Priority categories:

1. Real enterprise / government system experience
2. A sanitized technical recreation demonstrating engineering capability
3. A modern personal project involving AI or newer technologies

Never expose confidential client information, credentials, internal source code,
private database structures, or proprietary company information.

## Code Quality

- Use TypeScript properly.
- Prefer reusable React components.
- Keep components focused and readable.
- Avoid unnecessary abstractions.
- Avoid premature optimization.
- Avoid huge components.
- Use meaningful variable and component names.
- Maintain responsive design.
- Keep accessibility in mind.
- Remove unused code.
- Keep dependencies minimal.

## Project Structure

Prefer a structure similar to:

src/
  components/
  sections/
  data/
  assets/
  types/

Do not create directories until they are actually needed.

## Development Workflow

Before completing a meaningful change:

- Run lint.
- Run the production build.
- Check for TypeScript errors.
- Confirm responsive behavior where relevant.

Commands:

npm run dev
npm run lint
npm run build

## Git

Prefer small, meaningful changes.

Do not rewrite Git history.

Do not commit credentials, secrets, generated build folders, or unnecessary files.

## Agent Behaviour

Before implementing large UI or architectural changes:

1. Inspect the existing codebase.
2. Understand the current design direction.
3. Propose the implementation approach.
4. Avoid replacing working code unnecessarily.

When requirements are unclear, prefer the simplest maintainable solution.

Do not add libraries simply because they are popular.

Do not overengineer this portfolio.