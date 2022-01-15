# Contract security measures

## SWC-103 (Floating pragma)

### Specific compiler pragma 0.8.0 used in contracts to avoid accidental bug inclusion through outdated compiler versions.

## SWC-111 (Use of Deprecated Solidity Functions)

### Use  proper _safeMint function to safely mint a new token, instead of _mint

## Modifiers used only for validation
### All modifiers in contract(s) only validate data with require statements.

## Pull over push
### All functions that modify state are based on receiving calls rather than making contract calls
