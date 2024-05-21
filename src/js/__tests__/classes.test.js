import Character from "../classes";

test('normal attack', () => {
    const newMag = new Character(100, 2);
    expect(newMag.normalAttack()).toBe(90);
  });

  test('normal attack zero way', () => {
    const newDaemon = new Character(100, 0);
    
    expect(newDaemon.normalAttack()).toBe(100);
  });

  test('stoned attack zero way', () => {
    const newPlayer = new Character(100, 0);
    
    expect(newPlayer.stonedAttack()).toBe(95);
  });

  test('stoned attack', () => {
    const newPlayer = new Character(100, 2);
    
    expect(newPlayer.stonedAttack()).toBe(85);
  });