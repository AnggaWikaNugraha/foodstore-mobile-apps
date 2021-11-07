import AsyncStorage from "@react-native-async-storage/async-storage";

export const StoreData = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
    console.log('berhasil store data')
  } catch (e) {
    // saving error
    if (e) {
      console.log(e);
    }
  }
};

export const StoreFewData = async (obj1, obj2) => {
  const firstPair = [obj1.key, obj1.value]
  const secondPair = [obj2.key, obj2.value]

  try {
    await AsyncStorage.multiSet([firstPair, secondPair])
  } catch(e) {
    //save error
    if (e) {
      console.log(e);
    }
  }
}

export const getData = async (storageKey) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    if (e) {
      console.log(e);
    }
  }
};

export const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    // read key error
    if (e) {
      console.log(e);
    }
  }
  return keys;
};

export const GetMultiple = async (key1,key2) => {

  let values
  try {
    values = await AsyncStorage.multiGet([key1, key2])
  } catch(e) {
    // read error
    if (e) {
      console.log(e);
    }
  }
  return values
}

export const RemoveItem = async (storageKeys) => {
  try {
    await AsyncStorage.removeItem(storageKeys);
  } catch (e) {
    // remove error
    if (e) {
      console.log(e);
    }
  }
};

export const RemoveFew = async (obj1, obj2) => {
  const keys = [obj1, obj2]
  try {
    await AsyncStorage.multiRemove(keys)
  } catch(e) {
    // remove error
    if (e) {
      console.log(e);
    }
  }
}

export const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
    if (e) {
      console.log(e);
    }
  }
}
