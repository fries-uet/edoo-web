import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {EdUser} from "../../definitions/ed-user";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'ed-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss'],
    providers: [UserService]
})
export class EditProfileComponent implements OnInit {
    public user: any = null;

    private isEditDes = false;
    private isEditFavorite = false;

    private isDisabled = false;

    private description = '';
    private favorite = '';

    constructor(private userSrv: UserService,
                private route: ActivatedRoute,
                private titleService: Title) {
    }

    ngOnInit() {
        this.titleService.setTitle('Cập nhật thông tin cá nhân');

        this.route.data
            .subscribe(
                (data: { user: EdUser }) => {
                    this.user = data.user;
                }
            );
    }

    updateFavorite() {
        this.isDisabled = true;

        this.userSrv.updateProfile(this.user)
            .subscribe(
                data => {
                    this.closeEditFavorite();

                    this.isDisabled = false;
                },
                err => {
                    this.isDisabled = false;
                }
            )
    }

    openEditFavorite() {
        this.favorite = this.user['favorite'];

        this.closeEditDes();
        this.isEditFavorite = true;
    }

    closeEditFavorite() {
        this.isEditFavorite = false;
    }

    openEditDes() {
        this.description = this.user['description'];

        this.closeEditFavorite();
        this.isEditDes = true;
    }

    closeEditDes() {
        this.isEditDes = false;
    }
}
