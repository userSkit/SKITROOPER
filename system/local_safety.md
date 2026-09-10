# Keeping the local Claude Code session on a leash

Three layers. Do the first two now; the third is optional but real.

## 1. Repo-level permission rules (already in place after `git pull`)
`.claude/settings.json` tells Claude Code on your PC:
- It may read and edit files **only inside this repo folder**.
- It is **denied** reading your Documents, Desktop, Downloads, Pictures, OneDrive, AppData, SSH keys, and all Windows/Program Files folders.
- It is **denied** every delete, move, format, registry, scheduled-task, shutdown, download, install, and script-execution command.
- It must **ask you** before any `git push`.
- Everything else outside the allow list prompts you first (default mode, not auto mode).

`CLAUDE.md` adds the business rules: no sending, no logins, no spending, no touching the ledger's confirmed column.

**Important:** these rules are enforced by Claude Code itself. They are strong, but they are not the operating system. Layers 2 and 3 are what the OS enforces.

## 2. Move the repo out of C:\WINDOWS\system32 (do this once)
The repo currently sits inside the Windows system folder, which the rules above deny access to. Put a clean copy in your user folder instead. In PowerShell:

```
cd ~
git clone https://github.com/userSkit/SKITROOPER.git
cd SKITROOPER
git checkout claude/10-to-10k-business-8cf955
& "$env:USERPROFILE\.local\bin\claude.exe"
```

From then on, always start Claude from `C:\Users\<you>\SKITROOPER`. You can delete the copy in system32 by hand whenever you like (File Explorer, right-click, delete).

## 3. Windows-enforced protection (optional, 2 minutes)
Windows Security → Virus & threat protection → Manage ransomware protection → turn on **Controlled folder access**. Windows then blocks any app that isn't explicitly allowed from writing to Documents, Pictures, Desktop and any folder you add. This is enforced by the OS, so it holds even if a rule above were ever bypassed. Add your SKITROOPER folder's parent only if you want to be strict; the repo itself must stay writable.

## How to check it's working
Start Claude in the repo and type: `Try to read C:\Users\<you>\Documents and tell me what happens.` It should report the read is denied by settings.
