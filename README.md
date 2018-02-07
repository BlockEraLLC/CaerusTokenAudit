# Caerus Token

## Technical definition

At the technical level Caerus token is a ERC20-compliant token, derived from the [Open zeppelin](https://github.com/OpenZeppelin/).

Also built in the token is a vesting schedule for limiting Caerus transferability over time. CAerus Connection Project founders have vesting in their tokens.

## Contracts

Token:

- [RateToken.sol](/contracts/RateToken.sol): Main contract for the token. Derives MiniMeIrrevocableVestedToken.
- [CaerusToken.sol](/contracts/CaerusToken.sol): Adds vesting to MiniMeToken. Derives MiniMeToken.

## Reviewers and audits

Code for the Caerus token and the sale has been reviewed by:
TBD.

A bug bounty for the ANT token and sale started on [pending date]. More details.
