# Local agent loop for the operator's PC.
# Every 30 minutes: pull the branch, let the local Claude do the next task from system/local_tasks.md, push results.
# Start it from a normal PowerShell window:
#   powershell -ExecutionPolicy Bypass -File "$env:USERPROFILE\SKITROOPER\system\local_agent.ps1"
# Stop it with Ctrl+C. Before first run, do ONE manual push from PowerShell so the GitHub credential is cached.

$repo   = "$env:USERPROFILE\SKITROOPER"
$branch = "claude/10-to-10k-business-8cf955"
$claude = "$env:USERPROFILE\.local\bin\claude.exe"
if (-not (Test-Path $claude)) { $claude = "claude" }

Set-Location $repo
while ($true) {
  $stamp = Get-Date -Format "yyyy-MM-dd HH:mm"
  Write-Host "[$stamp] pulling..."
  git pull --rebase origin $branch 2>&1 | Out-Host

  $prompt = @"
You are the local agent. Read CLAUDE.md and system/local_tasks.md. Read system/local_tasks_status.md if it exists.
Do the FIRST task that is not marked done. Work carefully and record findings with links in research/local_tasks_results.md.
Then append a line to system/local_tasks_status.md: '<date> <task number> done' (or 'blocked: <reason>').
Commit with a clear message and run: git push origin $branch
Never log in, buy, post, or message. Never touch files outside this repo. If nothing is left to do, write 'idle' to the status file and stop.
"@

  & $claude -p $prompt --permission-mode acceptEdits --max-turns 60 2>&1 | Out-Host

  git push origin $branch 2>&1 | Out-Host
  Write-Host "[$stamp] sleeping 30 min. Ctrl+C to stop."
  Start-Sleep -Seconds 1800
}
