import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

export class LoginViewModel {
  constructor(public Username: string = '', public Password: string = '') {}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy, OnInit {
  disableButtons = false;
  emailToChangePassword = '';
  loginVm: any;//LoginViewModel;
  passwordButton: any;
  passwordMode: string;
  //registerEmail: string;
  showChangePassword = false;
  showLogin = true;
  showMessageChangePassword = false;
  showMessageRegistration = false;
  showRegistration = false;

  private config: any//ConfigurationDTO;
  // private currentUserSub: Subscription;
  // private loginErrorSub: Subscription;

  // constructor(
  //     private adminService: AdminService,
  //     private authenticationService: AuthenticationService,
  //     private notificationService: NotificationService,
  //     private permissionService: PermissionsService,
  //     private router: Router,
  //     private userFacade: UserFacade,
  //     private loggingService: LoggingService
  // ) {
  //   this.userFacade.dispatch(new userActions.LogoutAction());
  //   this.passwordMode = 'password';
  //   this.passwordButton = {
  //     icon: 'far fa-eye dx-theme-accent-as-text-color',
  //     stylingMode: 'text',
  //     onClick: () => {
  //       this.passwordMode = this.passwordMode === 'text' ? 'password' : 'text';
  //     },
  //   };
  // }

  constructor(  ) {
    this.passwordMode = 'password';
    this.passwordButton = {
      icon: 'far fa-eye dx-theme-accent-as-text-color',
      stylingMode: 'text',
      onClick: () => {
        this.passwordMode = this.passwordMode === 'text' ? 'password' : 'text';
      },
    };
  }

  isConfigLoaded(): boolean {
    return true;//!!this.config;
  }

  isLoginAllowed(): boolean {
    return location.hostname === 'localhost' || (this.config?.SignInAllowed ?? true);
  }

  isRegistrationAllowed(): boolean {
    return this.config?.RegistrationsAllowed ?? true;
  }

  ngOnDestroy(): void {
    // this.currentUserSub?.unsubscribe();
    // this.loginErrorSub?.unsubscribe();
  }

  ngOnInit() {
    // this.adminService.getConfiguration().subscribe((configuration) => {
    //   this.config = configuration;
    // });
    // this.loginVm = new LoginViewModel();
    // this.loginErrorSub = this.userFacade.loginError$.subscribe((loginError) => {
    //   if (loginError) {
    //     // NOTE: vm recreation required due to the immutability of the dev extreme text box value
    //     this.recreateLoginViewModel();
    //     this.notificationService.errorMessage('Incorrect email or password');
    //     this.disableButtons = false;
    //   }
    // });
    // this.currentUserSub = this.userFacade.currentUser$.subscribe(
    //     (currentUser) => {
    //       if (!!currentUser) {
    //         if (!!currentUser?.Theme) this.adminService.changeTheme(currentUser.Theme);
    //
    //         this.loggingService.setUserId(currentUser.Username);
    //
    //         let homePage = '/home';
    //         this.permissionService.getHomePage().subscribe({
    //           next: (home) => {
    //             homePage = home.FeatureSetUri;
    //           },
    //           complete:  () => {
    //             const url = !!this.authenticationService.redirectTo
    //                 ? this.authenticationService.redirectTo
    //                 : currentUser.ResetAtNextLogin
    //                     ? '/reset-password'
    //                     : !!currentUser.IsAdvisor && !!currentUser.IsAdministrator
    //                         ? '/home/partner-dashboard'
    //                         : !!currentUser.IsAdvisor
    //                             ? '/home/advisor-dashboard'
    //                             : '/home';
    //             if (!!this.authenticationService.navigationExtras) {
    //               this.router.navigate([url], this.authenticationService.navigationExtras).then(() => this.clearNavigationExtras());
    //             } else {
    //               this.router.navigate([url]).then(() => this.clearNavigationExtras());
    //             }
    //           }
    //         });
    //       }
    //     },
    //     (err) => {
    //       this.notificationService.unexpectedError('Error loading current user details', err);
    //       this.disableButtons = false;
    //     }
    // );
  }

  onChangePassword() {
    this.disableButtons = true;
    // this.authenticationService.sendPasswordResetEmail(this.emailToChangePassword).subscribe(
    //     () => {
    //       this.showMessageChangePassword = true;
    //       this.disableButtons = false;
    //     },
    //     () => {
    //       this.notificationService.unexpectedError('Unable to send password reset email.  Please try again later.');
    //       this.disableButtons = false;
    //     }
    // );
  }

  registerUser() {
    // this.disableButtons = true;
    // const registrationUser: UserDTO = {
    //   Username: this.registerEmail,
    // };
    // this.authenticationService.getUserByUsername(this.registerEmail).subscribe(
    //     (user) => {
    //       if (!user) {
    //         this.authenticationService.sendRegistrationEmail(registrationUser).subscribe(() => {
    //           this.disableButtons = false;
    //           this.showMessageRegistration = true;
    //         });
    //       } else {
    //         if (!(user.IsRegistered ?? false)) {
    //           this.resendEmail(true);
    //         } else {
    //           this.notificationService.errorMessage('Email address is already registered.  Please log in.');
    //           this.disableButtons = false;
    //         }
    //       }
    //     },
    //     () => {
    //       this.notificationService.unexpectedError('Unable to send registration email.  Please try again later.');
    //       this.disableButtons = false;
    //     }
    // );
  }

  resendEmail(showMessage = false) {
    // const user: UserDTO = {
    //   Username: this.registerEmail,
    // };
    // this.authenticationService.resendRegistrationEmail(user).subscribe(
    //     () => {
    //       if (showMessage) {
    //         this.showMessageRegistration = true;
    //       } else {
    //         this.notificationService.successful('Registration email has been re-sent.');
    //       }
    //       this.disableButtons = false;
    //     },
    //     () => {
    //       this.notificationService.unexpectedError('Unable to re-send Registration email.  Please try again later.');
    //       this.disableButtons = false;
    //     }
    // );
  }

  showChangePasswordForm() {
    this.emailToChangePassword = '';
    this.showLogin = false;
    this.showChangePassword = true;
    this.showRegistration = false;
  }

  showLoginForm() {
    this.showLogin = true;
    this.showChangePassword = false;
    this.showRegistration = false;
  }

  showRegistrationForm() {
    // this.registerEmail = '';
    // this.showLogin = false;
    // this.showChangePassword = false;
    // this.showRegistration = true;
  }

  validateUser() {
    // this.disableButtons = true;
    // const user: UserPrincipal = this.loginVm as UserPrincipal;
    // this.userFacade.dispatch(new userActions.LoginRequestAction({ user }));
  }

  private clearNavigationExtras() {
    // sessionStorage.removeItem('navigation-current-item');
    // this.authenticationService.redirectTo = '';
    // this.authenticationService.navigationExtras = null;
  }

  private recreateLoginViewModel() {
    const u = this.loginVm.Username;
    const p = this.loginVm.Password;
    this.loginVm = new LoginViewModel(u, p);
  }
}
