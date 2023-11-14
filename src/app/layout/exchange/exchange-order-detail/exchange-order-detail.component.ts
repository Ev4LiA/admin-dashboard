import {Component, inject, OnInit} from '@angular/core';
import {UserExchangeOrderModel} from "../helper/model/UserExchangeOrder.model";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ImageModalComponent} from "../../../shared/components/image-modal/image-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {AdminExchangeService} from "../../../shared/service/admin-exchange.service";

@Component({
    selector: 'app-exchange-order-detail',
    templateUrl: './exchange-order-detail.component.html',
    styleUrls: ['./exchange-order-detail.component.scss']
})
export class ExchangeOrderDetailComponent implements OnInit {
    selectedOrder: UserExchangeOrderModel;
    private route = inject(ActivatedRoute);
    private router = inject(Router);

    // Form
    evaluateForm: UntypedFormGroup;
    private formBuilder = inject(FormBuilder);

    // Admin Service
    private adminExchangeService = inject(AdminExchangeService);

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {
        this.selectedOrder = this.route.snapshot.data[0].data;
        this.initForm();
        this.initData();
    }

    private initData() {

    }

    private initForm() {
        const controls = this.selectedOrder.books.map((book) => {
            return new UntypedFormGroup({
                estimated: new UntypedFormControl({
                    value: book.approximatePrice,
                    disabled: true
                }, [
                    Validators.required,
                    Validators.min(1),
                    Validators.pattern('^[1-9][0-9]*$')
                ]),
                evaluate: new UntypedFormControl({
                    value: book.evaluate ? book.evaluate : book.approximatePrice,
                    disabled: this.selectedOrder.status != 'NEW' && this.selectedOrder.status != 'CONFIRMED'
                }, [
                    Validators.required,
                    Validators.min(1),
                    Validators.pattern('^[1-9][0-9]*$')
                ])
            })
        })

        this.evaluateForm = this.formBuilder.group({
            items: this.formBuilder.array(controls)
        })
    }

    get evaluateControl() {
        return this.evaluateForm.get('items');
    }

    openImageModal(imageUrl: string) {
        this.dialog.open(ImageModalComponent, {
            data: {imageUrl: imageUrl},
        });
    }

    confirmEvaluate() {
        let bookExchangeList: BookRequest[] = [];
        let evaluateAmountArray = this.evaluateControl.getRawValue();
        for (let i = 0; i < this.selectedOrder.books.length; i++) {
            bookExchangeList.push({
                bookExchangeOrderId: this.selectedOrder.books[i].uuid,
                evaluateAmount: Number(evaluateAmountArray[i].evaluate)
            })
        }
        let request = {
            userId: this.selectedOrder.userId,
            orderId: this.selectedOrder.uuid,
            bookExchangeList
        }

        this.adminExchangeService.adminEvaluateOrder(request).subscribe({
            next: value => this.router.navigate(['exchange/exchange-list']),
            error: err => console.log(err.message)
        })
    }

    confirmAddPoint() {
        let request = {
            orderId: this.selectedOrder.uuid
        }
        this.adminExchangeService.adminConfirmOrder(request).subscribe({
            next: value => this.router.navigate(['exchange/exchange-list']),
            error: err => console.log(err.message)
        })
    }
}

export interface BookRequest {
    bookExchangeOrderId: string,
    evaluateAmount: number
}
