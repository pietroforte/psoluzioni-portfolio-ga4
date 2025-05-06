entity Customer {
  key ID: UUID;
  firstName: String(50);
  lastName: String(50);
  email: String(100);
  birthDate: Date;
  consentGiven: Boolean;
}

entity Purchase {
  key ID: UUID;
  customer: Association to Customer;
  product: String(100);
  amount: Decimal(10,2);
  purchaseDate: DateTime;
}

entity ConsentLog {
  key ID: UUID;
  customer: Association to Customer;
  type: String(50);
  consented: Boolean;
  timestamp: DateTime;
}

entity AuditLog {
  key ID       : UUID;
  timestamp    : DateTime;
  eventType    : String;
  entity       : String;
  details      : LargeString;
}

entity NetworkContact {
  key ID              : String(20);
  firstName           : String(100);
  lastName            : String(100);
  linkedin            : String(200);
  company             : String(100);
  position            : String(100);
  connectedOn         : Date;
  status              : String(20);
  notes               : String(500);
  isPriorityCompany   : Boolean;
  isSenior            : Boolean;
  relevanceScore      : Integer;
  contactRoles        : String(255);
  campaignSegments    : String(255);
  lastContactedOn     : Timestamp;     // ✅ ADD THIS LINE
}

entity SAP_Emarsys_CampaignEvent {
  @default: 'uuid'
  key ID: UUID;
  name: String;
  eventCode: String; // like "winback_campaign_trigger"
  description: String;
}

service LoyaltyService {
  entity Customers     as projection on Customer;
  entity Purchases     as projection on Purchase;
  entity ConsentLogs   as projection on ConsentLog;
  entity AuditLogs     as projection on AuditLog;
  entity NetworkContacts as projection on NetworkContact;
}

extend service LoyaltyService {
  entity CampaignEvents as projection on SAP_Emarsys_CampaignEvent;

  action triggerEmarsys(contactID: String, eventCode: String, source: String) returns {
    success: Boolean;
    status: String;
    emailPreview: String;
  };
}

