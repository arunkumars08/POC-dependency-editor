import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.less'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Comment below to see the blank mission flow
  blankResponse = {
    "_resolved": [
        {
            "package": "io.vertx:vertx-core",
            "version": "3.5.0"
        },
        {
            "package": "io.vertx:vertx-unit",
            "version": "3.5.0"
        }
    ],
    "ecosystem": "maven",
    "request_id": "602af58786db4539b8c23f398c79f281"
  };
  // Uncomment below to see the normal flow (Not blank mission flow)
  // githubUrl = 'https://github.com/openshiftio-vertx-boosters/vertx-health-checks-booster-redhat';
  // githubRef = 'v12';
  boosterInfo = {
    "mission": {
      "id": "configmap"
    },
    "runtime": {
      "id": "vert.x",
      "name": "Eclipse Vert.x",
      "version": "redhat"
    }
  };
}
