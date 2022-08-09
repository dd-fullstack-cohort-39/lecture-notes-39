DROP TABLE IF EXISTS "ticketStatus";
DROP TABLE IF EXISTS status;
DROP TABLE IF EXISTS ticket;
DROP TABLE IF EXISTS project;
DROP TABLE IF EXISTS profile;

CREATE TABLE IF NOT EXISTS profile(
	"profileId" uuid NOT NULL,
	"profileAboutMe" VARCHAR(512),
	"profileEmail" VARCHAR(128) NOT NULL,
	"profileHash" CHAR(97) NOT NULL,
	"profileName" VARCHAR(32) NOT NULL,
	UNIQUE ("profileEmail"),
	UNIQUE ("profileName"),
	PRIMARY KEY ("profileId")
	);

CREATE INDEX ON profile("profileEmail");

CREATE TABLE IF NOT EXISTS project(
	"projectId" uuid NOT NULL,
	"projectProfileId" uuid NOT NULL,
	"projectDueDate" timestamptz NOT NULL,
	"projectDescription" VARCHAR(512) NOT NULL,
	"projectName" VARCHAR(32) NOT NULL,
	PRIMARY KEY ("projectId"),
	FOREIGN KEY ("projectProfileId") REFERENCES profile("profileId")
	);

CREATE INDEX ON project("projectProfileId");

CREATE TABLE IF NOT EXISTS ticket(
	"ticketId" uuid NOT NULL,
	"ticketProfileId" uuid NOT NULL,
	"ticketProjectId" uuid NOT NULL,
	"ticketDescription" VARCHAR(512) NOT NULL,
	"ticketDueDate" timestamptz NOT NULL,
	"ticketName" VARCHAR(32) NOT NULL,
	PRIMARY KEY ("ticketId"),
	FOREIGN KEY ("ticketProfileId") REFERENCES profile("profileId"),
	FOREIGN KEY ("ticketProjectId") REFERENCES project("projectId")
	);

CREATE INDEX ON ticket("ticketProjectId");
CREATE INDEX ON ticket("ticketProfileId");

CREATE TABLE IF NOT EXISTS status(
	"statusId" uuid NOT NULL,
	"statusValue" VARCHAR(32) NOT NULL,
	"statusColor" CHAR(6) NOT NULL,
	PRIMARY KEY ("statusId")
	);

CREATE TABLE IF NOT EXISTS "ticketStatus"(
	"ticketStatusStatusId" uuid NOT NULL,
	"ticketStatusTicketId" uuid NOT NULL,
	"ticketStatusDate" timestamptz NOT NULL,
	FOREIGN KEY ("ticketStatusStatusId") REFERENCES status("statusId"),
	FOREIGN KEY ("ticketStatusTicketId") REFERENCES ticket("ticketId"),
	PRIMARY KEY ("ticketStatusStatusId", "ticketStatusTicketId")
	);

CREATE INDEX ON "ticketStatus"("ticketStatusStatusId");
CREATE INDEX ON "ticketStatus"("ticketStatusTicketId");

