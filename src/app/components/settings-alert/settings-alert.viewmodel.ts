export class SettingsAlertViewModel {
  constructor(
    public player1Commander: boolean,
    public player2Commander: boolean,
    public player1Partner: boolean,
    public player2Partner: boolean,
    public player1Poison: boolean,
    public player2Poison: boolean,
    public player1Monarch: boolean,
    public player2Monarch: boolean,
    public player1CitysBlessing: boolean,
    public player2CitysBlessing: boolean,
    public player1ShowIcons: boolean,
    public player2ShowIcons: boolean,
    public player1Activate5PointsButtons: boolean,
    public player2Activate5PointsButtons: boolean,
  ) {
  }
}
