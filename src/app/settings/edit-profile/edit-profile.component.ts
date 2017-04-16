import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {EdUser} from "../../definitions/ed-user";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {BreadcrumbsService} from "../../services/breadcrumbs.service";

@Component({
    selector: 'ed-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss'],
    providers: [UserService]
})
export class EditProfileComponent implements OnInit {
    public user: EdUser = null;
    public isDisabled = false;

    constructor(private userSrv: UserService,
                private breadcrumbsSrv: BreadcrumbsService,
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

        this.breadcrumbsSrv.setData([
            {
                link: '/a',
                text: 'Trang chủ',
            },
            {
                text: 'Tài khoản'
            }
        ])
    }

    onUpdateDescription(value) {
        this.isDisabled = true;

        this.userSrv
            .updateProfile({
                description: value
            })
            .subscribe(
                data => {
                    this.isDisabled = false;
                },
                err => {
                    this.isDisabled = false;
                }
            )
    }

    onUpdateFavorite(value) {
        this.isDisabled = true;

        this.userSrv
            .updateProfile({
                favorite: value
            })
            .subscribe(
                data => {
                    this.isDisabled = false;
                },
                err => {
                    this.isDisabled = false;
                }
            )
    }
}
