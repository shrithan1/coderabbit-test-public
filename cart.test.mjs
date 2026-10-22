import assert from 'node:assert/strict';
import test from 'node:test';
import { cartTotal } from './cart.mjs';

test('cart total accounts for item quantities', () => {
  assert.equal(cartTotal([{ unitPriceCents: 500, quantity: 3 }]), 1500);
});
