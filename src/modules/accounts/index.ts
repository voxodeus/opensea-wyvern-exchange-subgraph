import { Bytes } from "@graphprotocol/graph-ts"
import { Account } from "../../../generated/schema"

export namespace accounts {

	export function getOrCreateAccount(address: Bytes, txId: string): Account {
		let id = address.toHex()
		let entity = Account.load(id)
		if (entity == null) {
			entity = new Account(id)
			entity.address = address
			entity.createdAt = txId
			entity.lastUpdatedAt = txId
		}
		return entity as Account
	}
}