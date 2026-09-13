A Bun + Next.js project set-up with Zed editor configuration

#### Usage

```sh
bunx degit egormelyakin/next myapp && cd myapp && ./setup.sh
```

Cloning works too. `setup.sh` drops the template's `.git` before creating a fresh one.

```sh
git clone https://github.com/egormelyakin/next.git myapp && cd myapp && ./setup.sh
```

The script un-ignores the lock files, installs dependencies, deletes itself along with `README.md` and `LICENSE`, then commits the result as a new repository.

Every dependency is set to `latest` in the template. The script runs `bun update --latest`, which resolves each one and writes the real version back into `package.json` (`^x.y.z`), so the new repo starts with concrete ranges and a `bun.lock`.
