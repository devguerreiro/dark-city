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

    this.updateScoreOnLocalStorage(this.score);
  }

  public resetScore(): void {
    const hasAtLeastOneScore = this.score.some((s) => s);

    if (hasAtLeastOneScore) {
      this.score = this.getEmptyScore();

      this.updateScoreOnLocalStorage(this.score);
    }
  }

  private getEmptyScore(): TScore {
    return Array(maxScore).fill(false);
  }

  private getDefaultScore(): TScore {
    const defaultScore = localStorage.getItem(this.name);

    if (!defaultScore) {
      const score = this.getEmptyScore();

      this.updateScoreOnLocalStorage(score);

      return score;
    }

    return JSON.parse(defaultScore);
  }

  private updateScoreOnLocalStorage(score: TScore): void {
    localStorage.setItem(this.name, JSON.stringify(score));
  }
}
