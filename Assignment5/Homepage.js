import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import Transaction from './Transaction';

const verticalData = [
    {id: 1, title: "Apple Store", section: "Entertainment", salary: "-$5,99", icon: require("./assets/apple.png")},
    {id: 2, title: "Spotify", section: "Music", salary: "-$12,99", icon: require("./assets/spotify.png")},
    {id: 3, title: "Money Transfer", section: "Entertainment", salary: "$300", icon: require("./assets/moneyTransfer.png"), textColour: "blue"},
    {id: 4, title: "Grocery", section: "sales", salary: "$80", icon: require("./assets/grocery.png")},
    {id: 5, title: "Apple Store", section: "Entertainment", salary: "-$5,99", icon: require("./assets/apple.png")},
    {id: 6, title: "Spotify", section: "Music", salary: "-$12,99", icon: require("./assets/spotify.png")},
    {id: 7, title: "Money Transfer", section: "Entertainment", salary: "$300", icon: require("./assets/moneyTransfer.png"), textColour: "blue"},
    {id: 8, title: "Grocery", section: "sales", salary: "$80", icon: require("./assets/grocery.png")},
]

export default function Homepage(){
    return(
    <>
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.profileImage} source={require("./assets/profile.png")} />
                <Text style={styles.welcomeText}>Welcome back,</Text>
                <Text style={styles.nameText}>Caleb Tetteh</Text>
                    <View style={styles.roundBox}>
                        <Image style={styles.searchImage} source={require("./assets/search.png")} />
                    </View>
                    <View style={styles.cardInfo}>
                        <Image style={styles.cardImage} source={require("./assets/Card.png")} />
                    </View>
                    <Text style={styles.transactionText}>Transaction</Text>
                    <Text style={styles.seeAllText}>See All</Text>
            </View>
            <View style={styles.container2}>
            <View style={styles.roundBox1}>
                <Image style={styles.sendImage} source={require("./assets/send.png")} />
                <Text style={styles.sendText}>Sent</Text>
            </View>
            <View style={styles.roundBox2}>
                <Image style={styles.recieveImage} source={require("./assets/recieve.png")} />
                <Text style={styles.recieveText}>Receive</Text>
            </View>
            <View style={styles.roundBox3}>
                <Image style={styles.loanImage} source={require("./assets/loan.png")} />
                <Text style={styles.loanText}>Loan</Text>
            </View>
            <View style={styles.roundBox4}>
                <Image style={styles.topUpImage} source={require("./assets/topUp.png")} />
                <Text style={styles.topUpText}>Top Up</Text>
            </View>
            </View>
            <FlatList
        vertical = {true}
        data={verticalData}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
            <Transaction
                title={item.title}
                section={item.section}
                salary={item.salary}
                icon={item.icon}
                textColour={item.textColour}
            />
        )}
        />
        </ScrollView>

        

        <View style={styles.footer}>
            <TouchableOpacity style={styles.footerItem}>
                <Image style={styles.footerIcon} source={require("./assets/home.png")} />
                <Text style={styles.footerText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem}>
                <Image style={styles.footerIcon} source={require("./assets/myCards.png")} />
                <Text style={styles.footerText}>My Cards</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem}>
                <Image style={styles.footerIcon} source={require("./assets/statictics.png")} />
                <Text style={styles.footerText}>Statistics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem}>
                <Image style={styles.footerIcon} source={require("./assets/settings.png")} />
                <Text style={styles.footerText}>Settings</Text>
            </TouchableOpacity>
        </View>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 0
      },
      profileImage: {
        width: 70,
        height: 70,
        top: 90,
        left: 25,
      },
      welcomeText: {
        fontSize: 18,
        width: 200,
        height: 30,
        left: 110,
        top: 25,
        color: "#929292",
      },
      nameText: {
        fontSize: 24,
        fontWeight: "600",
        left: 110,
        top: 30,
      },
      roundBox: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#FAFAFD",
        marginLeft: 310,
        top: -33,
      },
      searchImage:{
        top: 11,
        left: 11,
        width: 40,
        height: 40,
      },
      cardInfo: {
        flex: 1,
      },
      cardImage: {
        left: 30,
      },
      container2:{
        width: 200,
        height: 120,
        left: 10,
        top: 40,
      },
      roundBox1:{
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: "#FAFAFD",
        bottom: 70,
        left: 30,
      },
      sendImage:{
        top: 17,
        left: 17,
      },
      sendText:{
        fontSize: 14,
        top: 34,
        left: 9,
      },
      roundBox2:{
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: "#FAFAFD",
        bottom: 119,
        left: 120,
      },
      recieveImage:{
        top: 17,
        left: 17,
      },
      recieveText:{
        fontSize: 14,
        top: 33,
        width: 70,
      },
      roundBox3:{
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: "#FAFAFD",
        bottom: 169,
        left: 210,
      },
      loanImage:{
        top: 14,
        left: 14
      },
      loanText:{
        fontSize: 14,
        top: 27,
        left: 11,
      },
      roundBox4:{
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: "#FAFAFD",
        bottom: 219,
        left: 293,
      },
      topUpImage:{
        top: 14,
        left: 14
      },
      topUpText:{
        fontSize: 14,
        top: 27,
        left: 4,
      },
      transactionText:{
        width: 110,
        height: 30,
        fontSize: 19,
        top: 115,
        left: 33,
        fontWeight: "600",
      },
      seeAllText:{
        fontSize: 18,
        top: 85,
        left: 300,
        fontWeight: "500",
        color: "blue",
      },
      footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#FAFAFD',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: '#E7E7E7',
      },
      footerItem: {
        alignItems: 'center',
      },
      footerIcon: {
        width: 24,
        height: 24,
        marginBottom: 5,
      },
      footerText: {
        fontSize: 14,
        color: '#929292',
      },
})
