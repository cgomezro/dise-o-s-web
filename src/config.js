module.exports = {
  SERVER_URL:
    process.env.NODE_ENV === "production"
      ? "https://bluesphere.herokuapp.com"
      : "http://localhost:1337",
  LIMIT: 15,
  CARBON_ASSETS_SYMBOLS: {
    VCU: "verified_standard_account",
    VER: "gold_standard_account",
    CRT: "climate_action_account",
    ERT: "american_carbon_account",
  },
  CARBON_ASSETS_NAME: {
    VCU: "Verified Carbon Standard Registry Account",
    VER: "Gold Standard Registry Account",
    CRT: "Climate Action Reserve Registry Account",
    ERT: "American Carbon Registry Account",
  },
};
