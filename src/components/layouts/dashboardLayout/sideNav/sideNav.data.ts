import { RoutePath } from '/src/data';
import { FaBullhorn, FaUsers, FaChartLine, FaStore, FaCog, FaUserFriends, FaHandshake } from 'react-icons/fa';
//import { PermissionType, UserType } from 'types';

export const __SideNavOptions = [
  {
    url: RoutePath.announcements.index(),
    title: 'Announcements',
    icon: FaBullhorn,
    patterns: ['/announcements/*'],
    children: [
      { url: RoutePath.announcements.index(), title: 'Announcements', icon: FaBullhorn },
      {
        url: RoutePath.announcements.list(),
        title: 'List Announcements',
        icon: FaBullhorn,
        permissions: ['announcements.update'],
      },
      {
        url: RoutePath.announcements.new(),
        title: 'Add Announcement',
        permissions: ['announcements.create'],
      },
    ],
    // functional_permissions: (user: UserType) => {
    //     return true;
    // },
  },
  {
    url: RoutePath.users.index(),
    title: 'User Management',
    icon: FaUsers,
    patterns: ['/users/*', '/permissions/*', '/roles/*'],
    children: [
      { url: RoutePath.users.index(), title: 'User List' },
      { url: RoutePath.users.new(), title: 'Add User', permissions: ['user.create'] },
    ],
    permissions: ['user.read'],
  },
  {
    url: RoutePath.clients.index(),
    title: 'Client Management',
    icon: FaUserFriends,
    patterns: ['/clients/*', '/dealers/*'],
    children: [
      { url: RoutePath.clients.index(), title: 'Clients List', permissions: ['client.read'] },
      { url: RoutePath.dealers.index(), title: 'Dealers List', permissions: ['dealer.read'] },
      { url: RoutePath.questionnaires.index(), title: 'Questionnaires List', permissions: ['questionnaire.read'] },
      { url: RoutePath.redflagConfigs.index(), title: 'Redflag Configs', permissions: ['redflag_config.read'] },
    ],
    permissions: ['client.create', 'dealer.create'],
  },
  {
    url: RoutePath.leads.index(),
    title: 'Leads',
    icon: FaChartLine,
    patterns: ['/leads/*', '/cases/*'],
    children: [
      { url: RoutePath.leads.index(), title: 'Leads List' },
      { url: RoutePath.leads.new(), title: 'New Lead' },
      { url: RoutePath.cases.index(), title: 'Cases' },
    ],
  },
  {
    url: RoutePath.stores.index(),
    title: 'Stores',
    icon: FaStore,
    patterns: ['/stores/*'],
    children: [
      { url: RoutePath.stores.index(), title: 'Stores', permissions: ['store.read'] },
      { url: RoutePath.leadAssignments.index(), title: 'Lead Assignments', permissions: ['lead_assignment.create'] },
    ],
    permissions: ['store.create'],
  },
  // {
  //     url: RoutePath.appointment.new(),
  //     title: 'Appointments',
  //     icon: FaBeer,
  //     patterns: ['/appointments/*'],
  //     children: [
  //         { url: RoutePath.appointment.weeks(''), title: 'Calendar' },
  //         { url: RoutePath.appointment.new(), title: 'New Appointments' },
  //     ],
  //     // functional_permissions: (user: UserType) => {
  //     //     return (
  //     //         user.all_permissions.includes('manage self appointments') ||
  //     //         user.all_permissions.includes('manage all appointments') ||
  //     //         user.all_permissions.includes('have appointments') ||
  //     //         user.all_permissions.includes('manage company appointments')
  //     //     );
  //     // },
  //     permissions: [
  //         'manage self appointments',
  //         'manage all appointments',
  //         'have appointments',
  //         'manage company appointments',
  //     ],
  // },
  {
    url: RoutePath.services.index(),
    title: 'Services',
    icon: FaHandshake,
    patterns: ['/services/*'],
    children: [
      { url: RoutePath.services.index(), title: 'Services List', permissions: ['service.read'] },
      { url: RoutePath.services.new(), title: 'Add Service', permissions: ['service.create'] },
    ],
    permissions: ['service.create'],
  },
  {
    url: RoutePath.postalCodes.index(),
    title: 'Administration',
    icon: FaCog,
    patterns: ['/postal-codes/*', '/files/*'],
    children: [
      { url: RoutePath.files.index(), title: 'Files', permissions: ['files.read_all'] },
      { url: RoutePath.postalCodes.index(), title: 'Postal Codes List', permissions: ['postal_code.read'] },
      { url: RoutePath.postalCodes.new(), title: 'Add Postal Code', permissions: ['postal_code.create'] },
    ],
    permissions: ['postal_code.create'],
  },
  // {
  //     url: RoutePath.workflow.__index,
  //     title: 'Workflows',
  //     icon: FaBeer,
  //     patterns: ['/workflows/*', '/actions/*'],
  //     children: [
  //         { url: RoutePath.workflow.__index, title: 'Workflows' },
  //         { url: RoutePath.workflow.new(), title: 'Add Workflow' },
  //         { url: RoutePath.action.__index, title: 'Lead Actions' },
  //     ],
  // },
  // {
  //     url: RoutePath.export.__index,
  //     title: 'Exports',
  //     icon: FaFileExport,
  //     patterns: ['/exports/*'],
  //     children: [
  //         { url: RoutePath.export.__index, title: 'Existing Exports' },
  //         { url: RoutePath.export.new(), title: 'Generate Export' },
  //     ],
  //     permissions: ['view exports', 'create exports'],
  // },
  // {
  //     url: RoutePath.translation.__index,
  //     title: 'Settings',
  //     icon: RiSettings3Fill,
  //     patterns: ['/translations/*'],
  //     children: [
  //         { url: RoutePath.translation.__index, title: 'Translation List' },
  //         { url: RoutePath.translation.new(), title: 'Add Translation' },
  //     ],
  //     permissions: ['configuration'],
  // },
];
