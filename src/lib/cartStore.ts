import {writable} from "svelte/store"

import type { ShoppingCartItem } from "./shoppingCart"

const myCart:ShoppingCartItem[] = []

export const cart = writable<ShoppingCartItem[]>(myCart)

