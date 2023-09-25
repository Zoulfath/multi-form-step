import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8081',
          realm: 'angular',
          clientId: 'frontend',
        },
        initOptions: {
          pkceMethod: 'S256',
          checkLoginIframe: false
        }
      });
}
