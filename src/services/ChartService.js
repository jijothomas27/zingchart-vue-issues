const lego = {
  type: 'bubble-pack',
  options: {
    minSize: 3,
    format: {
      short: true,
      decimals: 2,
      decimalsSeparator: '.',
      thousandsSeparator: ',',
    },
    itemLevel0: {
      borderWidth: 0,
    },
    itemLevel1: {
      borderWidth: 0,
    },
    palette: [
      '#DAD2E6',
      '#BFC4FF',
      '#B3D4FF',
      '#C5FFE9',
      '#D7C7EC',
      '#FBD1EA',
      '#E0F3B8',
      '#FFDCCE',
      '#D2EEFD',
      '#FAC8AD',
      '#E5ADB2',
      '#C5ADB4',
      '#FAB4DF',
      '#FAE9ED',
    ],
  },
  style: {
    borderWidth: 20,
    tooltip: {
      visible: true,
      alpha: 0.8,
      backgroundColor: '#328fff',
      borderWidth: 0,
      fontColor: '#FFFFFF',
      fontSize: 12,
      textAlpha: 1,
    },
  },
  series: [
    {
      id: 'Organizations',
      name: 'Organizations',
      parent: '',
      group: 'Organizations',
    },
    {
      id: 'LEGO Retail',
      parent: 'Organizations',
      name: 'LEGO Retail',
      group: 'LEGO Retail',
      value: 25,
    },
    {
      id: 'Ogilvy',
      parent: 'Organizations',
      name: 'Ogilvy',
      group: 'Ogilvy',
      value: 25,
    },
    {
      id: 'LEGO',
      parent: 'Organizations',
      name: 'LEGO',
      group: 'LEGO',
      value: 306,
    },
    {
      id: 'Pepsi-Co',
      parent: 'Organizations',
      name: 'Pepsi-Co',
      group: 'Pepsi-Co',
      value: 2,
    },
    {
      id: 'Mars',
      parent: 'Organizations',
      name: 'Mars',
      group: 'Mars',
      value: 2,
    },
    {
      id: 'Vodafone',
      parent: 'Organizations',
      name: 'Vodafone',
      group: 'Vodafone',
      value: 2,
    },
    {
      id: 'Nestle',
      parent: 'Organizations',
      name: 'Nestle',
      group: 'Nestle',
      value: 2,
    },
    {
      id: 'Nike',
      parent: 'Organizations',
      name: 'Nike',
      group: 'Nike',
      value: 2,
    },
    {
      id: 'Sony',
      parent: 'Organizations',
      name: 'Sony',
      group: 'Sony',
      value: 2,
    },
  ],
};

const tiktok = {
  type: 'bubble-pack',
  options: {
    minSize: 3,
    format: {
      short: true,
      decimals: 2,
      decimalsSeparator: '.',
      thousandsSeparator: ',',
    },
    itemLevel0: {
      borderWidth: 0,
    },
    itemLevel1: {
      borderWidth: 0,
    },
    palette: [
      '#DAD2E6',
      '#BFC4FF',
      '#B3D4FF',
      '#C5FFE9',
      '#D7C7EC',
      '#FBD1EA',
      '#E0F3B8',
      '#FFDCCE',
      '#D2EEFD',
      '#FAC8AD',
      '#E5ADB2',
      '#C5ADB4',
      '#FAB4DF',
      '#FAE9ED',
    ],
  },
  style: {
    borderWidth: 20,
    tooltip: {
      visible: true,
      alpha: 0.8,
      backgroundColor: '#328fff',
      borderWidth: 0,
      fontColor: '#FFFFFF',
      fontSize: 12,
      textAlpha: 1,
    },
  },
  series: [
    {
      id: 'Organizations',
      name: 'Organizations',
      parent: '',
      group: 'Organizations',
    },
    {
      id: 'WPP',
      parent: 'Organizations',
      name: 'WPP',
      group: 'WPP',
      value: 2,
    },
    {
      id: 'Ogilvy London',
      parent: 'Organizations',
      name: 'Ogilvy London',
      group: 'Ogilvy London',
      value: 2,
    },
    {
      id: 'Milan',
      parent: 'Organizations',
      name: 'Milan',
      group: 'Milan',
      value: 5,
    },
    {
      id: 'Ogilvy Paris',
      parent: 'Organizations',
      name: 'Ogilvy Paris',
      group: 'Ogilvy Paris',
      value: 4,
    },
    {
      id: 'Ogilvy Berlin',
      parent: 'Organizations',
      name: 'Ogilvy Berlin',
      group: 'Ogilvy Berlin',
      value: 2,
    },
    {
      id: 'Social First',
      parent: 'Organizations',
      name: 'Social First',
      group: 'Social First',
      value: 4,
    },
    {
      id: 'PHILIPS VANS',
      parent: 'Organizations',
      name: 'PHILIPS VANS',
      group: 'PHILIPS VANS',
      value: 1,
    },
    {
      id: 'TikTok',
      parent: 'Organizations',
      name: 'TikTok',
      group: 'TikTok',
      value: 132,
    },
    {
      id: 'Bad Press',
      parent: 'Organizations',
      name: 'Bad Press',
      group: 'Bad Press',
      value: 2,
    },
  ],
  id: '028a3767-1b6f-4c05-bc42-add832ade601',
};

class ChartService {
  charts = {
    lego,
    tiktok,
  };

  getChart(brand) {
    if (brand in this.charts) {
      return this.charts[brand];
    }

    return this.charts.lego;
  }
}

export default ChartService;

export const chartServiceInstance = new ChartService();
