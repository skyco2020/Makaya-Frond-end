import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { PaymentServiceService } from '../services/payment-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() id: any;
  @Input() nombre: any;
  @Input() descripcion: any;
  @Input() precio: any;

  constructor(
    public activeModal: NgbActiveModal,
    // private paymentService: PaymentServiceService,
    // private toastrService: ToastrService
    ) { }

  ngOnInit(): void {
  }
  confirmar(id: string): void {
    // this.paymentService.confirmar(id).subscribe(
    //   data => {
    //     this.toastrService.success
    //     ('pago confirmado', 'se ha confirmado el pago con id ' + data[`id`], {positionClass: 'toast-top-center', timeOut: 3000});
    //     this.activeModal.close();
    //   },
    //   err => {
    //     console.log(err);
    //     this.activeModal.close();
    //   }
    // );
  }

  cancelar(id: string): void {
    // this.paymentService.cancelar(id).subscribe(
    //   data => {
    //     this.toastrService.success
    //     ('pago cancelado', 'se ha cancelado el pago con id ' + data[`id`], {positionClass: 'toast-top-center', timeOut: 3000});
    //     this.activeModal.close();
    //   },
    //   err => {
    //     console.log(err);
    //     this.activeModal.close();
    //   }
    // );
  }
}
