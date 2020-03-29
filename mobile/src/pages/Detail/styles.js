import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';
export default StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#1C1C1C',
    marginBottom: 16,
    marginTop: 45
  },
  incidentProperty: {
    fontSize: 14,
    color: '#c0c0c0',
    fontWeight: 'bold',
    marginTop: 24
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#696969'
  },
  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#1C1C1C',
    marginBottom: 16,
  },
  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#c0c0c0',
    lineHeight: 30
  },
  heroDescription: {
    fontSize: 15,
    marginTop: 16,
    color: '#696969'
  },
  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionText: {
    color: '#ffffff'
  }
})