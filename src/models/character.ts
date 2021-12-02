import { TScore } from '@/types/score';

export const maxScore = 4;

export interface ICharacter {
  readonly name: string,
  readonly iconPath: string,
  score: TScore,
}

export class Character implements ICharacter {
  score: TScore = this.getDefaultScore()

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
    const hasAtLeastOneScore = this.score.some((s) => s);

    if (hasAtLeastOneScore) {
      this.score = this.getDefaultScore();
    }
  }

  private getDefaultScore(): TScore {
    return Array(maxScore).fill(false);
  }
}
