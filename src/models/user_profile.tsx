export class UserProfile {
  constructor(
    public FirstName: string,
    public LastName: string,
    public Email: string,
    public Pic: string
  ) {}

  GetFullName = (): string => `${this.FirstName} ${this.LastName}`;
  GetPic = (): string => `${this.Pic}`;
}
