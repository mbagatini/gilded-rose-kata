function Item(name, sell_in, quality) {
	this.name = name;
	this.sell_in = sell_in;
	this.quality = quality;
}

class Inventory {
	#items = []

	constructor(items) {
		this.#items = items
	}

	#update_quality_by_category(item) {
		if (item.name == 'Sulfuras, Hand of Ragnaros') {
			return this.#update_quality_legendary(item)
		}
		if (item.name == 'Aged Brie') {
			return this.#update_quality_aged_brie(item)
		}
		if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
			return this.#update_quality_backstage(item)
		}
		if (item.name == 'Conjured Mana Cake') {
			return this.#update_quality_conjured(item)
		}

		return this.#update_quality_standard(item)
	}

	update_quality() {
		for (var i = 0; i < this.#items.length; i++) {
			this.#items[i] = this.#update_quality_by_category(this.#items[i])

			// old code 
			/*
			if (this.#items[i].name != 'Aged Brie' && this.#items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
				if (this.#items[i].quality > 0) {
					if (this.#items[i].name != 'Sulfuras, Hand of Ragnaros') {
						this.#items[i].quality = this.#items[i].quality - 1
					}
				}
			} else {
				if (this.#items[i].quality < 50) {
					this.#items[i].quality = this.#items[i].quality + 1
					if (this.#items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
						if (this.#items[i].sell_in < 11) {
							if (this.#items[i].quality < 50) {
								this.#items[i].quality = this.#items[i].quality + 1
							}
						}
						if (this.#items[i].sell_in < 6) {
							if (this.#items[i].quality < 50) {
								this.#items[i].quality = this.#items[i].quality + 1
							}
						}
					}
				}
			}
			if (this.#items[i].name != 'Sulfuras, Hand of Ragnaros') {
				this.#items[i].sell_in = this.#items[i].sell_in - 1;
			}
			if (this.#items[i].sell_in < 0) {
				if (this.#items[i].name != 'Aged Brie') {
					if (this.#items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
						if (this.#items[i].quality > 0) {
							if (this.#items[i].name != 'Sulfuras, Hand of Ragnaros') {
								this.#items[i].quality = this.#items[i].quality - 1
							}
						}
					} else {
						this.#items[i].quality = this.#items[i].quality - this.#items[i].quality
					}
				} else {
					if (this.#items[i].quality < 50) {
						this.#items[i].quality = this.#items[i].quality + 1
					}
				}
			}
			*/
		}
	}

	#decrease_sell_in(item) {
		return item.sell_in - 1
	}

	#decrease_quality(item, number = 2) {
		if (item.quality - number < 0) {
			return 0
		}

		return item.quality - number
	}

	#inscrease_quality(item, number = 1) {
		if (item.quality + number > 50) {
			return 50
		}

		return item.quality + number
	}

	#update_quality_legendary(item) {
		return item
	}

	#update_quality_aged_brie(item) {
		item.sell_in = this.#decrease_sell_in(item)
		item.quality = this.#inscrease_quality(item)

		return item
	}

	#update_quality_backstage(item) {
		item.sell_in = this.#decrease_sell_in(item)

		if (item.sell_in < 0) {
			item.quality = 0
		} else if (item.sell_in > 5 && item.sell_in <= 10 ) {
			item.quality = this.#inscrease_quality(item, 2)
		} else if (item.sell_in >= 0 && item.sell_in <= 5 ) {
			item.quality = this.#inscrease_quality(item, 3)
		} else {
			item.quality = this.#inscrease_quality(item, 1)
		}

		return item
	}

	#update_quality_conjured(item) {
		item.sell_in = this.#decrease_sell_in(item)
		item.quality = this.#decrease_quality(item, 2)

		return item
	}

	#update_quality_standard(item) {
		item.sell_in = this.#decrease_sell_in(item)

		if (item.sell_in < 0) {
			item.quality = this.#decrease_quality(item, 2)
		} else {
			item.quality = this.#decrease_quality(item, 1)
		}

		return item
	}
}