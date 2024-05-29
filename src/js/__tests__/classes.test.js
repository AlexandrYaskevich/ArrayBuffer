import Character from "../classes";

test('normal attack', () => {
    const newMag = new Character("Daemon", 100, 2);
    expect(newMag.attack).toBe(90);
  });

  test('normal attack zero way', () => {
    const newDaemon = new Character("Daemon",100, 0);
    
    expect(newDaemon.attack).toBe(100);
  });

  test('stoned false', () => {
    const newPlayer = new Character("Player", 100, 0);
    
    expect(newPlayer.stoned).toBe(false);
  });

  test('stoned true', () => {
    const newPlayer = new Character("Player",100, 2);
    newPlayer.stonedstay = true;
    expect(newPlayer.stoned).toBe(true);
  });