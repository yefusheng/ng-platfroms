import {Injectable} from "@angular/core";
import {IAuthService} from "../platform/BaseAuth.service";

/**
 * Created by yefs on 2017/7/28.
 */
@Injectable()
export   class AuthService implements IAuthService{


  getToken(): string {
    return "yObxVpQqz9OZpev1AsLG88N%2bnUXqL1x%2bo2mSerEDthg%3d";
  }


}
