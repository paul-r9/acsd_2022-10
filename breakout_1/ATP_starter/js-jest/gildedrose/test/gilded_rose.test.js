const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("item name does not change", () => {
    // Arrange
    const sut = new Shop([new Item("foo", 0, 0)]);

    // Act
    const items = sut.updateQuality();

    // Assert
    expect(items[0].name).toBe("foo");
  });

  it("sellin is zero, it goes negative", () => {
    const sut = new Shop([new Item("foo", 0, 0)]);

    const items = sut.updateQuality();

    expect(items[0].sellIn).toBe(-1);
  });

  it("sellin is positive, sellin decreases by 1", () => {
    const sut = new Shop([new Item("foo", 10, 50)]);

    const items = sut.updateQuality();

    expect(items[0].sellIn).toBe(9);
  });

  it("quality is at max, quality decreases by 1", () => {
    const sut = new Shop([new Item("foo", 10, 50)]);

    const items = sut.updateQuality();

    expect(items[0].quality).toBe(49);
  });

  it("quality is at max, sellin is 0, quality decreases twice as fast", () => {
    const sut = new Shop([new Item("foo", 0, 50)]);

    const items = sut.updateQuality();

    expect(items[0].quality).toBe(48);
  });

  it("quality is 0, sellin is 0, quality remains 0", () => {
    const sut = new Shop([new Item("foo", 0, 0)]);

    const items = sut.updateQuality();

    expect(items[0].quality).toBe(0);
  });

  it("Aged Brie, quality is 0, sellin is 0, quality increases twice as fast", () => {
    const sut = new Shop([new Item("Aged Brie", 0, 0)]);

    const items = sut.updateQuality();

    expect(items[0].quality).toBe(2);
  });

  it("Backstage Pass, sellIn is 10, quality increases", () => {
    const sut = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);

    const items = sut.updateQuality();

    expect(items[0].quality).toBe(50);
  });

  it("Backstage Pass, sellIn is 10, quality increased by 2", () => {
    const sut = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 1)]);

    const items = sut.updateQuality();

    expect(items[0].quality).toBe(3);
  });

  it("Backstage Pass, sellIn is 5, quality increased by 3", () => {
    const sut = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 1)]);

    const items = sut.updateQuality();

    expect(items[0].quality).toBe(4);
  });

  it("Backstage pass, quality is below max, sellin is -1, quality goes to 0", () => {
    const sut = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -1, 5)]);

    const items = sut.updateQuality();

    expect(items[0].quality).toBe(0);
  });

  it("Legendary item, quality does not decrease", () => {
    const sut = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 25)]);

    const items = sut.updateQuality();

    expect(items[0].quality).toBe(25);
  });

  it("Legendary item, quality can be negative", () => {
    const sut = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, -25)]);

    const items = sut.updateQuality();

    expect(items[0].quality).toBe(-25);
  });

  it("Legendary item, sellin does not decrease", () => {
    const sut = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 80)]);

    const items = sut.updateQuality();

    expect(items[0].sellIn).toBe(10);
  });




});
