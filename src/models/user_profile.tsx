export class UserProfile {
  constructor(
    public FirstName: string,
    public LastName: string,
    public Email: string
  ) {}

  GetFullName = (): string => `${this.FirstName} ${this.LastName}`;
}
