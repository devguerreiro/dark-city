export const maxScore = 4;

export interface ICharacter {
  readonly name: string,
  readonly iconPath: string,
  readonly score: Array<boolean>,
}

export class Character implements ICharacter {
  readonly score: Array<boolean> = Array(maxScore).fill(false);

  constructor(readonly name: string, readonly iconPath: string) {
    this.name = name;
    this.iconPath = iconPath;
  }

  public get totalScore(): number {
    return this.score.filter((s) => s).length;
  }

  public changeScore(index: number, value: boolean): void {
    this.score.splice(index, 1, value);
  }

  public resetScore(): void {
    this.score.fill(false);
  }
}
