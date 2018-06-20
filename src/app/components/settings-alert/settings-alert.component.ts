/**
 * Created by Topplegeist Team on 25/04/2018.
 */

import {AlertComponent} from "../../commons/alert.component";
import {Component, OnInit, ViewChild} from "@angular/core";
import {SettingsAlertViewModel} from "./settings-alert.viewmodel";
import {OptionalCountersService} from "../../service/optional-counters.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'settings-alert',
  templateUrl: 'settings-alert.html',
  styleUrls: ['settings-alert.less']
})
export class SettingsAlertComponent extends AlertComponent implements OnInit {
  public model: SettingsAlertViewModel;
  public startingModel: SettingsAlertViewModel;
  private modelSubscription: Subscription;

  @ViewChild('settingsForm') public settingsForm: NgForm;

  constructor(private optionalCountersService: OptionalCountersService) {
    super();
    this.model = new SettingsAlertViewModel(
      this.optionalCountersService.commanderCounterMenu[0],
      this.optionalCountersService.commanderCounterMenu[1],
      this.optionalCountersService.partnerCounterMenu[0],
      this.optionalCountersService.partnerCounterMenu[1],
      this.optionalCountersService.poisonCounterMenu[0],
      this.optionalCountersService.poisonCounterMenu[1],
      this.optionalCountersService.monarchToken == 0,
      this.optionalCountersService.monarchToken == 1,
      this.optionalCountersService.citiesBlessingToken[0],
      this.optionalCountersService.citiesBlessingToken[1]
    );
    this.startingModel = new SettingsAlertViewModel(
      this.optionalCountersService.commanderCounterMenu[0],
      this.optionalCountersService.commanderCounterMenu[1],
      this.optionalCountersService.partnerCounterMenu[0],
      this.optionalCountersService.partnerCounterMenu[1],
      this.optionalCountersService.poisonCounterMenu[0],
      this.optionalCountersService.poisonCounterMenu[1],
      this.optionalCountersService.monarchToken == 0,
      this.optionalCountersService.monarchToken == 1,
      this.optionalCountersService.citiesBlessingToken[0],
      this.optionalCountersService.citiesBlessingToken[1]
    );
  }

  ngOnInit(): void {
    this.onChanges();
  }

  onChanges(): void {
    this.modelSubscription = this.settingsForm.valueChanges.subscribe((model: any) => this.writeModelToService(model));
  }

  writeModelToService(model: SettingsAlertViewModel) {
    this.optionalCountersService.commanderCounterMenu[0] = model.player1Commander;
    this.optionalCountersService.commanderCounterMenu[1] = model.player2Commander;
    this.optionalCountersService.partnerCounterMenu[0] = model.player1Partner;
    this.optionalCountersService.partnerCounterMenu[1] = model.player2Partner;
    this.optionalCountersService.poisonCounterMenu[0] = model.player1Poison;
    this.optionalCountersService.poisonCounterMenu[1] = model.player2Poison;
    this.optionalCountersService.monarchToken = model.player1Monarch ? 0 : (model.player2Monarch ? 1 : -1);
    this.optionalCountersService.citiesBlessingToken[0] = model.player1CitysBlessing;
    this.optionalCountersService.citiesBlessingToken[1] = model.player2CitysBlessing;
  }

  save() {
    this.modelSubscription.unsubscribe();
  }

  cancel() {
    this.writeModelToService(this.startingModel);
    this.modelSubscription.unsubscribe();
  }
}
