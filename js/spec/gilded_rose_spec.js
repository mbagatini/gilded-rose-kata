describe("Gilded Rose", function () {
	describe("when updating Sulfuras item", () => {
		it("should not descrease in quality", function () {
			const items = [new Item("Sulfuras, Hand of Ragnaros", 30, 80)];
			const inventory = new Inventory(items)
			inventory.update_quality();

			expect(items[0].quality).toEqual(80);
		})

		it("should not descrease in sell_in", function () {
			const items = [new Item("Sulfuras, Hand of Ragnaros", 30, 80)];
			const inventory = new Inventory(items)
			inventory.update_quality();

			expect(items[0].sell_in).toEqual(30);
		})
	})

	describe("when updating Aged Brie item", () => {
		it("should increase in quality by 1", function () {
			const items = [new Item("Aged Brie", 10, 10)];
			const inventory = new Inventory(items)
			inventory.update_quality();

			expect(items[0].quality).toEqual(11);
		})

		it("should descrease in sell_in by 1", function () {
			const items = [new Item("Aged Brie", 10, 10)];
			const inventory = new Inventory(items)
			inventory.update_quality();

			expect(items[0].sell_in).toEqual(9);
		})

		it("quality should not be greater than 50", function () {
			const items = [new Item("Aged Brie", 10, 50)];
			const inventory = new Inventory(items)
			inventory.update_quality();

			expect(items[0].quality).toEqual(50);
		})
	})

	describe("when updating Backstage passes item", () => {
		it("should increase in quality by 1", function () {
			const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10)];
			const inventory = new Inventory(items)
			inventory.update_quality();

			expect(items[0].quality).toEqual(11);
		})

		it("should increase in quality by 2", function () {
			const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 8, 10)];
			const inventory = new Inventory(items)
			inventory.update_quality();

			expect(items[0].quality).toEqual(12);
		})

		it("should increase in quality by 3", function () {
			const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)];
			const inventory = new Inventory(items)
			inventory.update_quality();

			expect(items[0].quality).toEqual(13);
		})

		it("the quality should be 0", function () {
			const items = [new Item("Backstage passes to a TAFKAL80ETC concert", -1, 10)];
			const inventory = new Inventory(items)
			inventory.update_quality();

			expect(items[0].quality).toEqual(0);
		})

		it("should decrease in sell_in by 1", function () {
			const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)];
			const inventory = new Inventory(items)
			inventory.update_quality();

			expect(items[0].sell_in).toEqual(-1);
		})

		it("quality should not be greater than 50", function () {
			const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50)];
			const inventory = new Inventory(items)
			inventory.update_quality();

			expect(items[0].quality).toEqual(50);
		})
	})

	describe("when updating Conjured item", () => {
		it("should decrease in sell_in by 1", function () {
			const items = [new Item("Conjured Mana Cake", 0, 10)];
			const inventory = new Inventory(items)
			inventory.update_quality();

			expect(items[0].sell_in).toEqual(-1);
		})

		it("should decrease in quality by 2", function () {
			const items = [new Item("Conjured Mana Cake", 10, 10)];
			const inventory = new Inventory(items)
			inventory.update_quality();

			expect(items[0].quality).toEqual(8);
		})
	})

	describe("when updating standard item", () => {
		it("should decrease in sell_in by 1", function () {
			const items = [new Item("Ordinary food", 10, 10)];
			const inventory = new Inventory(items)
			inventory.update_quality();

			expect(items[0].sell_in).toEqual(9);
		})

		it("should decrease in quality by 1", function () {
			const items = [new Item("Ordinary food", 10, 10)];
			const inventory = new Inventory(items)
			inventory.update_quality();

			expect(items[0].quality).toEqual(9);
		})

		it("should decrease in quality by 2", function () {
			const items = [new Item("Ordinary food", -2, 10)];
			const inventory = new Inventory(items)
			inventory.update_quality();

			expect(items[0].quality).toEqual(8);
		})
	})

});
