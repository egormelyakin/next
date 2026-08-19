This is a Bun Next.js project with Tailwind CSS and Shadcn UI

Use **Bun** instead of **Node.js** and **npm**:

- Use `bun install` to install all dependencies
- Use `bun add [package]` to add a package
- Use `bun add --dev [package]` to add a package as a dev dependency
- Use `bun run [script]` to run a script:
  - `bun run build` - create an optimized production build of the application
  - `bun run check` - run `bun tsc --noEmit` + `bun oxfmt --check` + `bun oxlint`
  - `bun run fmt` - run `bun oxlint --fix` + `bun oxfmt`

Use **Shadcn UI**:

- `bun shadcn add [component]` - add a new shadcn component
- `bun shadcn docs [component]` - view documentation of a component
- `bun shadcn list @shadcn -t ui` - view all available components
