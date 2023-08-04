import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["days"]

  connect() {
    var a = moment("20231104", "YYYYMMDD");
    var b = moment();
    var days = a.diff(b, 'days');
    this.daysTarget.innerHTML = "faltan " + days + (days > 1 ? " días" : " día");
  }
}
