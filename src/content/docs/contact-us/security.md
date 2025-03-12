---
title: Vulnerability Disclosure Policy
description: How to report security vulnerabilities to Val Town
---

We appreciate investigative work into our system's security by ethical security researchers. If you discover a vulnerability, please contact us so we can take steps to address it. We offer bug bounties as compensation, depending on the severity of the exploit found.

## Reporting a vulnerability

Please email findings to [security@val.town](mailto:security@val.town).

## Responsible Disclosure

- Do not take advantage of the vulnerability or problem you have discovered. For
  example only download data that is necessary to demonstrate the
  vulnerability - do not download any more. Do not delete, modify, or view
  other people's data.
- Do not publish or reveal the problem until it has been resolved.
- Do not use attacks on physical security, social engineering, distributed
  denial of service, spam or applications of third parties.

## Our commitment

- If you act in accordance with this policy, we will not take legal action
  against you in regard to your report.
- We will handle your report with strict confidentiality, and not pass on your
  personal details to third parties without your permission.
- We offer bug bounties as compensation, depending on the severity of
  the exploit found.

## In-scope domains

Val Town uses the following domains:

- `val.town`
- `valtown.email`
- `api.val.town`
- `esm.town`
- `val.run`

Subdomains of these domains are in scope for the program.

## Out of scope issues

- Reports that target vulnerabilities on outdated or deprecated browsers, open source libraries, or infrastructure
- Reports relating to missing security hardening headers
- Reports from automated tools or scans
- Our policies on presence/absence of SPF/DMARC/DKIM/CAA/BIMI records
- Self-XSS or developer console code execution
- Login/logout CSRF
- Phishing or social engineering attacks
- Brute force login attempts
- Bugs on Vals themselves. Vals are user-controlled code and are not part of Val Town's product surface
- Denial of Service or brute force attacks
- Violating any laws or breaching any agreements in order to discover vulnerabilities
