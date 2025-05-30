export interface FlashcardProps {
  chinese: string;
  pinyin: string;
  translation: string;
  hsk?: number;
  category?: string;
}

export class FlashcardDTO {
  private chinese: string;
  private pinyin: string;
  private translation: string;
  private hsk: number;
  private category: string;

  public constructor(props: FlashcardProps) {
    this.setChinese(props.chinese);
    this.setPinyin(props.pinyin);
    this.setTranslation(props.translation);
    this.setHsk(props.hsk ?? 0);
    this.setCategory(props.category ?? '');
  }

  public getChinese(): string {
    return this.chinese;
  }

  public setChinese(chinese: string): void {
    this.chinese = chinese;
  }

  public getPinyin(): string {
    return this.pinyin;
  }

  public setPinyin(pinyin: string): void {
    this.pinyin = pinyin;
  }

  public getTranslation(): string {
    return this.translation;
  }

  public setTranslation(translation: string): void {
    this.translation = translation;
  }

  public getHsk(): number {
    return this.hsk;
  }

  public setHsk(hsk: number): void {
    this.hsk = hsk;
  }

  public getCategory(): string {
    return this.category;
  }

  public setCategory(category: string): void {
    this.category = category;
  }
}
