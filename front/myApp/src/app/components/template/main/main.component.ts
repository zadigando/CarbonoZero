import { Component, ViewChild } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
} from 'ng-apexcharts';
import { HeaderService } from '../header/header.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class BodyComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Painel de Controle',
      link: '/painel-controle',
    };

    // Porcentagem atual (substitua pelo valor real desejado)
    const percentage = 90;

    // Lógica para determinar a cor com base na porcentagem
    const colorStops = [
      { percent: 0, color: '#D2222D' }, // Vermelho
      { percent: 25, color: '#D2222D' }, // Vermelho (até 25)
      { percent: 50, color: '#FFBF00' }, // Amarelo (até 50)
      { percent: 75, color: '#238823' }, // Verde Claro (até 75)
      { percent: 100, color: '#007000' }, // Verde Escuro (até 100)
    ];

    // Encontrar a cor correspondente com base na porcentagem
    let fillColor = colorStops[0].color;
    for (let i = 1; i < colorStops.length; i++) {
      if (percentage <= colorStops[i].percent) {
        fillColor = colorStops[i].color;
        break;
      }
    }

    this.chartOptions = {
      series: [percentage],
      chart: {
        type: 'radialBar',
        offsetY: 10,
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#e7e7e7',
            strokeWidth: '97%',
            margin: 5,
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: '22px',
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [
            0,
            percentage - 10, // Ajuste a margem para melhor transição entre as cores
            percentage + 3, // Ajuste a margem para melhor transição entre as cores
            100,
          ],
          colorStops: [
            { offset: 0, color: fillColor },
            { offset: 100, color: fillColor },
          ],
        },
      },
      labels: ['Average Results'],
    };
  }
}
